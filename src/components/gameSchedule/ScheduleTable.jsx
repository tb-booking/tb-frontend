import React, {Component, PropTypes} from 'react';
import {getImageUrl, convertSecToTime, formatDateAsDateString} from '../../helpers/helpers';
import {FREE_SCHEDULE_STATUS, BUSY_SCHEDULE_STATUS} from '../../helpers/constants';
import ScheduleItem from './ScheduleItem';
import ScheduleEdit from './ScheduleEdit';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gamesSchedulesActions from '../../actions/gamesSchedulesActions';
import toastr from 'toastr';

class ScheduleTable extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      scheduleRanges: Object.assign([], props.scheduleRanges),
      selectedRangeIdx: -1,
      selectedRange: {}
    };

    this.onScheduleClick = this.onScheduleClick.bind(this);
    this.countEditableRange = this.countEditableRange.bind(this);

    this.updateStartTime = this.updateStartTime.bind(this);
    this.updateEndTime = this.updateEndTime.bind(this);
    this.updateUserName = this.updateUserName.bind(this);
    this.saveSchedule = this.saveSchedule.bind(this);
    this.removeSchedule = this.removeSchedule.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      scheduleRanges: Object.assign([], nextProps.scheduleRanges),
      selectedRangeIdx: -1,
      selectedRange: {}
    });
  }

  onScheduleClick(idx) {
    if (this.state.selectedRangeIdx === idx) {
      this.setState({
        selectedRange: {},
        editableRange: {},
        selectedRangeIdx: -1
      });
    } else {
      this.setState({
        selectedRange: Object.assign({}, this.state.scheduleRanges[idx]),
        editableRange: this.countEditableRange(idx),
        selectedRangeIdx: idx
      });
    }
  }

  countEditableRange(idx) {
    const scheduleRange = this.state.scheduleRanges[idx];

    let startTime = scheduleRange.startTime;
    let endTime = scheduleRange.endTime;

    if (scheduleRange.status === BUSY_SCHEDULE_STATUS) {
      if ((idx - 1) > -1 && this.state.scheduleRanges[idx - 1].status === FREE_SCHEDULE_STATUS) {
        startTime = this.state.scheduleRanges[idx - 1].startTime;
      }
      if ((idx + 1) < this.state.scheduleRanges.length && this.state.scheduleRanges[idx + 1].status === FREE_SCHEDULE_STATUS) {
        endTime = this.state.scheduleRanges[idx + 1].endTime;
      }
    }

    return {
      startTime: startTime,
      endTime: endTime
    };
  }

  updateStartTime(time) {
    this.setState({selectedRange: Object.assign({}, this.state.selectedRange, {startTime: time})});
  }

  updateEndTime(time) {
    this.setState({selectedRange: Object.assign({}, this.state.selectedRange, {endTime: time})});
  }

  updateUserName(e) {
    this.setState({selectedRange: Object.assign({}, this.state.selectedRange, {userName: e.target.value})});
  }

  saveSchedule(event) {
    event.preventDefault();

    // this.setState({saving: true});
    const selectedRange = this.state.selectedRange;

    this.props.actions.saveSchedule({
      id: selectedRange.id,
      gameId: this.props.game.id,
      date: formatDateAsDateString(this.props.pickedDate),
      startTime: selectedRange.startTime,
      endTime: selectedRange.endTime,
      userName: selectedRange.userName
    })
      .then(() => {
        // this.setState({saving: false});
        toastr.success('Schedule range saved!');
      })
      .catch(error => {
        // this.setState({saving: false});
        toastr.error(error);
      });
  }

  removeSchedule() {
    this.props.actions.removeSchedule(this.state.selectedRange.id)
      .then(() => {
        // this.setState({saving: false});
        toastr.success('Schedule range removed!');
      })
      .catch(error => {
        // this.setState({saving: false});
        toastr.error(error);
      });
  }

  render() {
    return (
      <div className="row" id="game-schedule">
        <h1 className="text-center">{this.props.game.name}</h1>
        <div className="col-md-4 col-xs-12 text-center">
          <div className="game-schedule-image col-md-12 col-xs-6">
            <img src={getImageUrl(this.props.game.img)} />
          </div>
          <div className="game-schedule-datepicker col-md-12 col-xs-6">
            <div className="datepicker" />
          </div>
        </div>
        <div className="col-md-8 col-xs-12">
          <div className="col-md-6 col-xs-6">
            <div className="col-md-12 col-sm-9 col-xs-12" style={{float: 'none', margin: '0 auto'}}>
              {this.props.timePoints.map((timePoint, timeIndex) =>
                <div key={`time${timeIndex}`} className="schedule-time-item"
                     style={timePoint.style}>{convertSecToTime(timePoint.time)}</div>
              )}
              <div className="schedule-day">
                {this.props.scheduleRanges.map((range, idx) =>
                  <ScheduleItem key={`${range.startTime}-${range.endTime}`} scheduleRange={range}
                                onClick={() => this.onScheduleClick(idx)}
                                selected={idx === this.state.selectedRangeIdx} />
                )}
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xs-6">
            {
              this.state.selectedRangeIdx > -1 ? (
                  <ScheduleEdit selectedRange={this.state.selectedRange}
                                editableRange={this.state.editableRange}
                                saveSchedule={this.saveSchedule}
                                removeSchedule={this.removeSchedule}
                                updateStartTime={this.updateStartTime}
                                updateEndTime={this.updateEndTime}
                                updateUserName={this.updateUserName} />
                ) : ('')
            }
          </div>
        </div>
      </div>
    );
  }
}

ScheduleTable.propTypes = {
  pickedDate: PropTypes.instanceOf(Date).isRequired,
  game: PropTypes.object.isRequired,
  timePoints: PropTypes.array.isRequired,
  scheduleRanges: PropTypes.array.isRequired,
  actions: PropTypes.object
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(gamesSchedulesActions, dispatch)
  };
}

export default connect(() => {return {};}, mapDispatchToProps)(ScheduleTable);
