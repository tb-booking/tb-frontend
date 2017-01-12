import React, {Component, PropTypes} from 'react';
import {convertSecToTime} from '../../helpers/helpers';

class ScheduleItem extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    $('[data-toggle="tooltip"]').tooltip();
  }

  componentWillUnmount() {
    $('[data-toggle="tooltip"]').mouseleave();
  }

  render() {
    const scheduleRange = this.props.scheduleRange;
    const startTime = convertSecToTime(scheduleRange.startTime);
    const endTime = convertSecToTime(scheduleRange.endTime);

    return (
      <div
        className={`schedule-range ${scheduleRange.status} ${this.props.selected ? 'schedule-range-selected' : ''}`}
        title={`${startTime} - ${endTime} ${scheduleRange.userName ? ':' : ''} ${scheduleRange.userName}`}
        data-toggle="tooltip" data-placement="top" style={scheduleRange.style} onClick={this.props.onClick}>
        <span>{scheduleRange.userName ? scheduleRange.userName : ''}</span>
      </div>
    );
  }
}

ScheduleItem.propTypes = {
  scheduleRange: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired
};

export default ScheduleItem;
