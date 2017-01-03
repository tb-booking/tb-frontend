import React, {PropTypes} from 'react';
import ScheduleItem from './ScheduleItem';

const ScheduleTable = () => {
  const timeRanges = [];
  const startTimeSec = 28800; // 08:00
  const endTimeSec = 72000;   // 20:00
  const timeInterval = 1800;   // 30 min

  let currentTime = startTimeSec;
  let rangeId = 0;
  while (currentTime <= endTimeSec) {
    timeRanges.push({
      id: rangeId++,
      startTime: currentTime,
      endTime: currentTime + timeInterval
    });
    currentTime += timeInterval;
  }

  return (
    <table id="game-schedule-table" className="table table-hover table-bordered">
      <tbody>
        {timeRanges.map(range =>
          <ScheduleItem key={range.id} timeRange={range} />
        )}
      </tbody>
    </table>
  );
};

export default ScheduleTable;
