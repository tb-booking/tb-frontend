import React, {Component, PropTypes} from 'react';
import {convertSecToTime} from '../../helpers/helpers';
import {BUSY_SCHEDULE_STATUS} from '../../helpers/constants';
import TimePicker from 'react-bootstrap-time-picker';

class ScheduleEdit extends Component {
  constructor(props, context) {
    super(props, context);

    const selectedRange = props.selectedRange;
    const editableRange = props.editableRange;
    this.state = {
      selectedStartTime: selectedRange.status === BUSY_SCHEDULE_STATUS ? selectedRange.startTime : editableRange.startTime,
      selectedEndTime: selectedRange.status === BUSY_SCHEDULE_STATUS ? selectedRange.endTime : editableRange.endTime
    };

    this.updateSelectedStartTime = this.updateSelectedStartTime.bind(this);
    this.updateSelectedEndTime = this.updateSelectedEndTime.bind(this);
  }

  componentWillReceiveProps(newProps) {
    const selectedRange = newProps.selectedRange;
    const editableRange = newProps.editableRange;
    this.setState({
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

  render() {
    return (
      <div className="schedule-edit">
        <TimePicker onChange={this.updateSelectedStartTime} value={this.state.selectedStartTime}
                    start={convertSecToTime(this.props.editableRange.startTime)}
                    end={convertSecToTime(this.state.selectedEndTime)} step={15} />
        <TimePicker onChange={this.updateSelectedEndTime} value={this.state.selectedEndTime}
                    start={convertSecToTime(this.state.selectedStartTime)}
                    end={convertSecToTime(this.props.editableRange.endTime)} step={15} />
      </div>
    );
  }
}

ScheduleEdit.propTypes = {
  selectedRange: PropTypes.object.isRequired,
  editableRange: PropTypes.object.isRequired
};

export default ScheduleEdit;
