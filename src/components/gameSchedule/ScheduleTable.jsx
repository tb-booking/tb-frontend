import React, {Component, PropTypes} from 'react';
import {getImageUrl, convertSecToTime} from '../../helpers/helpers';
import {FREE_SCHEDULE_STATUS, BUSY_SCHEDULE_STATUS} from '../../helpers/constants';
import ScheduleItem from './ScheduleItem';
import ScheduleEdit from './ScheduleEdit';

class ScheduleTable extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      scheduleRanges: Object.assign([], props.scheduleRanges),
      selectedRangeIdx: -1
    };

    this.onScheduleClick = this.onScheduleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      scheduleRanges: Object.assign([], nextProps.scheduleRanges),
      selectedRangeIdx: -1
    });
  }

  onScheduleClick(idx) {
    this.state.scheduleRanges.forEach((range) => {
      if (this.state.selectedRangeIdx === idx) {
        this.setState({selectedRangeIdx: -1});
      } else {
        this.setState({selectedRangeIdx: idx});
      }
    });
  }

  countEditableRange() {
    const idx = this.state.selectedRangeIdx;
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
            <div className="col-md-12 col-sm-9 col-xs-12" style={{float: 'none'}}>
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
                  <ScheduleEdit selectedRange={this.state.scheduleRanges[this.state.selectedRangeIdx]}
                                editableRange={this.countEditableRange()} />
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
  scheduleRanges: PropTypes.array.isRequired
};

export default ScheduleTable;
