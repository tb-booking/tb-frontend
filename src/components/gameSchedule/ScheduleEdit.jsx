import React, {Component, PropTypes} from 'react';
import {Button, ControlLabel, FormGroup, FormControl} from 'react-bootstrap';
import TimePicker from 'react-bootstrap-time-picker';
import {convertSecToTime, formatDateAsDateString} from '../../helpers/helpers';
import {BUSY_SCHEDULE_STATUS} from '../../helpers/constants';
import toastr from 'toastr';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gamesSchedulesActions from '../../actions/gamesSchedulesActions';

class ScheduleEdit extends Component {
  constructor(props, context) {
    super(props, context);

    const selectedRange = props.selectedRange;
    const editableRange = props.editableRange;
    this.state = {
      userName: selectedRange.status === BUSY_SCHEDULE_STATUS ? selectedRange.userName : '',
      selectedStartTime: selectedRange.status === BUSY_SCHEDULE_STATUS ? selectedRange.startTime : editableRange.startTime,
      selectedEndTime: selectedRange.status === BUSY_SCHEDULE_STATUS ? selectedRange.endTime : editableRange.endTime
    };

    this.updateSelectedStartTime = this.updateSelectedStartTime.bind(this);
    this.updateSelectedEndTime = this.updateSelectedEndTime.bind(this);
    this.updateUserName = this.updateUserName.bind(this);
    this.saveSchedule = this.saveSchedule.bind(this);
  }

  componentWillReceiveProps(newProps) {
    const selectedRange = newProps.selectedRange;
    const editableRange = newProps.editableRange;
    this.setState({
      userName: selectedRange.status === BUSY_SCHEDULE_STATUS ? selectedRange.userName : '',
      selectedStartTime: selectedRange.status === BUSY_SCHEDULE_STATUS ? selectedRange.startTime : editableRange.startTime,
      selectedEndTime: selectedRange.status === BUSY_SCHEDULE_STATUS ? selectedRange.endTime : editableRange.endTime
    });
  }

  updateSelectedStartTime(time) {
    this.setState({selectedStartTime: time});
  }

  updateSelectedEndTime(time) {
    this.setState({selectedEndTime: time});
  }

  updateUserName(e) {
    this.setState({userName: e.target.value});
  }

  saveSchedule(event) {
    event.preventDefault();

    // this.setState({saving: true});
    const selectedRange = this.props.selectedRange;

    this.props.actions.saveSchedule({
      id: selectedRange.id,
      gameId: this.props.game.id,
      date: formatDateAsDateString(this.props.date),
      startTime: this.state.selectedStartTime,
      endTime: this.state.selectedEndTime,
      userName: this.state.userName
    })
      .then(() => {
        toastr.success('Schedule range saved!');
      })
      .catch(error => {
        // this.setState({saving: false});
        toastr.error(error);
      });
  }

  render() {
    const editableRange = this.props.editableRange;
    const selectedRange = this.props.selectedRange;

    return (
      <div className="schedule-edit">
        <h3>{selectedRange.status === BUSY_SCHEDULE_STATUS ? 'Edit current range' : 'Create new range'}</h3>

        <div>
          <FormGroup>
            <ControlLabel>User name</ControlLabel>
            <FormControl type="text" value={this.state.userName} placeholder="User name"
                         onChange={this.updateUserName} />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Start time</ControlLabel>
            <TimePicker onChange={this.updateSelectedStartTime} value={this.state.selectedStartTime}
                        start={convertSecToTime(editableRange.startTime)}
                        end={convertSecToTime(this.state.selectedEndTime)} step={15} />
          </FormGroup>
          <FormGroup>
            <ControlLabel>End time</ControlLabel>
            <TimePicker onChange={this.updateSelectedEndTime} value={this.state.selectedEndTime}
                        start={convertSecToTime(this.state.selectedStartTime)}
                        end={convertSecToTime(editableRange.endTime)} step={15} />
          </FormGroup>
          <FormGroup>
            <Button bsStyle="primary" onClick={this.saveSchedule}>Save changes</Button>
          </FormGroup>
        </div>
      </div>
    );
  }
}

ScheduleEdit.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  game: PropTypes.object.isRequired,
  selectedRange: PropTypes.object.isRequired,
  editableRange: PropTypes.object.isRequired,
  actions: PropTypes.object
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(gamesSchedulesActions, dispatch)
  };
}

export default connect(() => {return {};}, mapDispatchToProps)(ScheduleEdit);
