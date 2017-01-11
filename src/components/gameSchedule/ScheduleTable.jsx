import React, {Component, PropTypes} from 'react';
import {getImageUrl, convertSecToTime} from '../../helpers/helpers';
import ScheduleItem from './ScheduleItem';

class ScheduleTable extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      scheduleRanges: props.scheduleRanges
    };
  }

  render() {
    return (
      <div className="row" id="game-schedule">
        <h1 className="text-center">{this.props.game.name}</h1>
        <div className="col-md-4 col-xs-5 text-center">
          <img src={getImageUrl(this.props.game.img)} />
          <div className="datepicker" />
          {this.props.pickedDate.toDateString()}
        </div>
        <div className="col-md-8 col-xs-7">
          <div className="col-md-6 col-xs-6">
            {this.props.timePoints.map((timePoint, timeIndex) =>
              <div key={`time${timeIndex}`} className="schedule-time-item"
                   style={timePoint.style}>{convertSecToTime(timePoint.time)}</div>
            )}
            <div className="schedule-day">
              {this.props.scheduleRanges.map(range =>
                <ScheduleItem key={`${range.startTime}-${range.endTime}`} scheduleRange={range} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ScheduleTable.propTypes = {
  pickedDate: PropTypes.instanceOf(Date),
  game: PropTypes.object.isRequired,
  timePoints: PropTypes.array.isRequired,
  scheduleRanges: PropTypes.array.isRequired
};

export default ScheduleTable;
