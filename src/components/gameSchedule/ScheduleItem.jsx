import React, {Component, PropTypes} from 'react';
import {convertSecToTime} from '../../helpers/helpers';

const ScheduleItem = ({scheduleRange}) => {
  const startTime = convertSecToTime(scheduleRange.startTime);
  const endTime = convertSecToTime(scheduleRange.endTime);
  return (
    <div className="schedule-range" data-toggle="tooltip" data-html="true" data-placement="top"
         title={`${startTime} - ${endTime} <br/> ${scheduleRange.userName}`} style={scheduleRange.style}>
      {scheduleRange.userName ? scheduleRange.userName : 'FREE'}
    </div>
  );
};

ScheduleItem.propTypes = {
  scheduleRange: PropTypes.object.isRequired
};

export default ScheduleItem;
