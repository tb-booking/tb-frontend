import React, {Component, PropTypes} from 'react';
import {convertSecToTime} from '../../helpers/helpers';

class ScheduleEdit extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="schedule-edit">
        Selected range: {`${convertSecToTime(this.props.selectedRange.startTime)}-${convertSecToTime(this.props.selectedRange.endTime)}`}
        <br />
        Editable range: {`${convertSecToTime(this.props.editableRange.startTime)}-${convertSecToTime(this.props.editableRange.endTime)}`}
      </div>
    );
  }
}

ScheduleEdit.propTypes = {
  selectedRange: PropTypes.object.isRequired,
  editableRange: PropTypes.object.isRequired
};

export default ScheduleEdit;
