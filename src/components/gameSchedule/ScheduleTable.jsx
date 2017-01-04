import React, {PropTypes} from 'react';
import {convertSecToTime, convertTimeToSec} from '../../helpers/helpers';
import ScheduleItem from './ScheduleItem';

const ScheduleTable = ({gameSchedules}) => {
  const timePoints = [];
  const startTimeSec = 32400; // 09:00
  const endTimeSec = 75600;   // 20:00
  const timeInterval = 3600;  // 1 hour

  let currentTime = startTimeSec;
  let rangesAmount = (endTimeSec - startTimeSec) / timeInterval;
  let rangeId = 0;
  while (currentTime <= endTimeSec) {
    timePoints.push({
      time: currentTime,
      style: {top: (100 / rangesAmount * rangeId) + '%'}
    });
    rangeId++;
    currentTime += timeInterval;
  }

  return (
    <div data-toggle="tooltip" data-placement="right" title="Tooltip on right" className="col-md-8 col-xs-8">
      {timePoints.map((timePoint, timeIndex) =>
        <div key={`time${timeIndex}`} className="schedule-time-item" style={timePoint.style}>{convertSecToTime(timePoint.time)}</div>
      )}

      <div className="schedule-day">
asd
      </div>
    </div>
  );
};

ScheduleTable.propTypes = {
  gameSchedules: PropTypes.array
};

export default ScheduleTable;

