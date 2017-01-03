import React, {PropTypes} from 'react';

const ScheduleItem = ({timeRange}) => {
  // debugger
  return (
    <tr>
      <td>Item, {timeRange.startTime}, {timeRange.endTime}</td>
    </tr>
  );
};

ScheduleItem.propTypes = {
  timeRange: PropTypes.object.isRequired
};

export default ScheduleItem;
