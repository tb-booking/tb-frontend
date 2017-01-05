import React, {Component, PropTypes} from 'react';
// import {bindActionCreators} from 'redux';
// import * as gamesSchedulesActions from '../../actions/gamesSchedulesActions';
import {connect} from 'react-redux';
import {formatDateForDatepicker, formatDateAsDateString} from '../../helpers/helpers';
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

    $('[data-toggle="tooltip"]').tooltip();
  }

  startTime = 32400; // 09:00
  endTime = 75600;   // 20:00
  timeInterval = 3600;  // 1 hour

  countTimePoints() {
    const timePoints = [];

    let currentTime = this.startTime;
    let rangesAmount = (this.endTime - this.startTime) / this.timeInterval;
    let rangeId = 0;
    while (currentTime <= this.endTime) {
      timePoints.push({
        time: currentTime,
        top: (100 / rangesAmount * rangeId)
      });
      rangeId++;
      currentTime += this.timeInterval;
    }
    return timePoints;
  }

  getSortedScheduleForChosenDate() {
    const compareSchedules = (a, b) => {
      if (a.startTime < b.startTime) {
        return -1;
      } else if (a.startTime > b.startTime) {
        return 1;
      }
      return 0;
    };

    const gameSchedules = this.props.gamesSchedules.reduce((schedules, currentScheduleItem) => {
      if (currentScheduleItem.gameId === this.props.gameId && currentScheduleItem.date === formatDateAsDateString(this.state.pickedDate)) {
        schedules.push(currentScheduleItem);
      }
      return schedules;
    }, []);

    gameSchedules.sort(compareSchedules);
    return gameSchedules;
  }

  countScheduleRanges() {
    let ranges = [];
    let currentStartTime = this.startTime;
    let currentEndTime = this.startTime;
    let currentStatus;
    const schedule = this.getSortedScheduleForChosenDate();

    const addScheduleRange = (start, end, status, user = '') => {
      ranges.push({
        startTime: start,
        endTime: end,
        status: status,
        userName: user
      });
    };

    schedule.forEach(s => {
      // check start time
      // currentStartTime = currentEndTime;

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
        addScheduleRange(currentStartTime, currentEndTime, BUSY_SCHEDULE_STATUS, s.userName);
      }
    });

    if (currentEndTime < this.endTime) {
      addScheduleRange(currentEndTime, this.endTime, FREE_SCHEDULE_STATUS);
    }

    return ranges;
  }

  render() {
    return (
      <ScheduleTable pickedDate={this.state.pickedDate} game={this.props.game}
                     timePoints={this.countTimePoints()} scheduleRanges={this.countScheduleRanges()} />
    );
  }
}

GameSchedulePage.propTypes = {
  gameId: PropTypes.string.isRequired,
  game: PropTypes.object.isRequired,
  gamesSchedules: PropTypes.array.isRequired
  // actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    game: state.games[ownProps.gameId],
    gamesSchedules: state.gamesSchedules
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(gamesSchedulesActions, dispatch)
//   };
// }

export default connect(mapStateToProps)(GameSchedulePage);
