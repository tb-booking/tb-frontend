import React, {Component, PropTypes} from 'react';
import {getImageUrl, convertSecToTime} from '../../helpers/helpers';
import ScheduleItem from './ScheduleItem';

const ScheduleTable = ({game, timePoints, scheduleRanges, pickedDate}) => {
  return (
    <div className="row" id="game-schedule">
      <h1 className="text-center">{game.name}</h1>
      <div className="col-md-4 col-xs-5 text-center">
        <img src={getImageUrl(game.img)} />
        <div className="datepicker" />
        {pickedDate.toDateString()}
      </div>
      <div className="col-md-8 col-xs-7">
        <div className="col-md-8 col-xs-8">
          {timePoints.map((timePoint, timeIndex) =>
            <div key={`time${timeIndex}`} className="schedule-time-item"
                 style={timePoint.style}>{convertSecToTime(timePoint.time)}</div>
          )}
          <div className="schedule-day">
            {scheduleRanges.map(range =>
              <ScheduleItem key={range.startTime} scheduleRange={range} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

ScheduleTable.propTypes = {
  pickedDate: PropTypes.instanceOf(Date),
  game: PropTypes.object.isRequired,
  timePoints: PropTypes.array.isRequired,
  scheduleRanges: PropTypes.array.isRequired
};

export default ScheduleTable;
