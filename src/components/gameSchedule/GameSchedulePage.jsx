import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {formatDateForDatepicker, getSortedScheduleForChosenDate} from '../../helpers/helpers';
import {FREE_SCHEDULE_STATUS, BUSY_SCHEDULE_STATUS} from '../../helpers/constants';
import ScheduleTable from './ScheduleTable';
import './gameSchedule.scss';

class GameSchedulePage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      pickedDate: new Date()
    };
  }

  componentDidMount() {
    const dp = $('.datepicker').datepicker({
      startDate: '0',
      endDate: '+14d'
    });

    dp.datepicker('setDate', formatDateForDatepicker(this.state.pickedDate));

    dp.on('changeDate', (e) => {
      const newDate = new Date(e.date);
      this.setState({pickedDate: newDate});
    });
  }

  startTime = 32400; // 09:00
  endTime = 75600;   // 21:00
  timeInterval = 3600;  // 1 hour

  countTimePoints() {
    const timePoints = [];

    let currentTime = this.startTime;
    let rangesAmount = (this.endTime - this.startTime) / this.timeInterval;
    let rangeId = 0;
    while (currentTime <= this.endTime) {
      timePoints.push({
        time: currentTime,
        style: {top: (100 / rangesAmount * rangeId) + '%'}
      });
      rangeId++;
      currentTime += this.timeInterval;
    }
    return timePoints;
  }

  countScheduleRanges(gamesSchedules) {
    let ranges = [];
    let currentStartTime = this.startTime;
    let currentEndTime = this.startTime;
    const schedule = getSortedScheduleForChosenDate(gamesSchedules, this.props.gameId, this.state.pickedDate);

    const addScheduleRange = (start, end, status, user = '', id = -1) => {
      const generalHeight = this.endTime - this.startTime;

      ranges.push({
        id: id,
        startTime: start,
        endTime: end,
        status: status,
        userName: user,
        style: {
          top: (100 / generalHeight * (start - this.startTime)) + '%',
          height: `calc(${(100 / generalHeight * (end - start)) + '%'} - 2px)`
        }
      });
    };

    schedule.forEach(s => {
      if (s.startTime < currentEndTime) {
        // will write error and ignore wrong start time end start from last end time
        // TODO: send error to backend
        console.error(`${this.props.gameId} schedule error with id ${s.id}: wrong start time`);
      }
      currentStartTime = currentEndTime;

      if (s.startTime > currentEndTime) {
        addScheduleRange(currentEndTime, s.startTime, FREE_SCHEDULE_STATUS);
        currentStartTime = s.startTime;
      }

      if (s.endTime <= currentStartTime) {
        // will write error and stop processing this range
        // TODO: send error to backend
        console.error(`${this.props.gameId} schedule error with id ${s.id}: wrong end time`);
      } else {
        if (s.endTime > this.endTime) {
          // will write error and ignore wrong end time, will use general end time
          // TODO: send error to backend
          console.error(`${this.props.gameId} schedule error with id ${s.id}: wrong end time`);
          currentEndTime = this.endTime;
        } else {
          currentEndTime = s.endTime;
        }
        addScheduleRange(currentStartTime, currentEndTime, BUSY_SCHEDULE_STATUS, s.userName, s.id);
      }
    });

    if (currentEndTime < this.endTime) {
      addScheduleRange(currentEndTime, this.endTime, FREE_SCHEDULE_STATUS);
    }

    return ranges;
  }

  render() {
    return (
      <ScheduleTable pickedDate={this.state.pickedDate} game={this.props.game} timePoints={this.countTimePoints()}
                     scheduleRanges={this.countScheduleRanges(this.props.gamesSchedules)} />
    );
  }
}

GameSchedulePage.propTypes = {
  gameId: PropTypes.string.isRequired,
  game: PropTypes.object.isRequired,
  gamesSchedules: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    game: state.games[ownProps.gameId],
    gamesSchedules: state.gamesSchedules
  };
}

export default connect(mapStateToProps)(GameSchedulePage);
