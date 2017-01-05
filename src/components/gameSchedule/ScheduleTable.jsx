import React, {Component, PropTypes} from 'react';
import {getImageUrl, convertSecToTime, convertTimeToSec} from '../../helpers/helpers';
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
        <div data-toggle="tooltip" data-placement="right" title="Tooltip on right" className="col-md-8 col-xs-8">
          {timePoints.map((timePoint, timeIndex) => {
            const style = {top: timePoint.top + '%'};
            return (<div key={`time${timeIndex}`} className="schedule-time-item"
                         style={style}>{convertSecToTime(timePoint.time)}</div>);
          })}
          <div className="schedule-day">
            asdasdasdasd
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
