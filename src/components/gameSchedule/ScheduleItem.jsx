import React, {Component, PropTypes} from 'react';
import {convertSecToTime} from '../../helpers/helpers';

class ScheduleItem extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    $('[data-toggle="tooltip"]').tooltip();
  }

  render() {
    const scheduleRange = this.props.scheduleRange;
    const startTime = convertSecToTime(scheduleRange.startTime);
    const endTime = convertSecToTime(scheduleRange.endTime);
    return (
      <div className="schedule-range" data-toggle="tooltip" data-placement="top"
           title={`${startTime} - ${endTime} ${scheduleRange.userName ? ':' : ''} ${scheduleRange.userName}`} style={scheduleRange.style}>
        <span>{scheduleRange.userName ? scheduleRange.userName : ''}</span>
      </div>
    );
  }
}

ScheduleItem.propTypes = {
  scheduleRange: PropTypes.object.isRequired
};

export default ScheduleItem;
