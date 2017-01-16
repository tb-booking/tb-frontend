import delay from './delay';
import {formatDateAsDateString, convertTimeToSec} from '../helpers/helpers';

const gamesSchedules = (() => {
  const d = new Date();
  const today = formatDateAsDateString(d);
  d.setDate(d.getDate() + 1);
  const tomorrow = formatDateAsDateString(d);

  return [
    {
      id: 1,
      gameId: 'tennis',
      date: today,
      startTime: convertTimeToSec('14:00'),
      endTime: convertTimeToSec('15:15'),
      userName: 'aoliinyk'
    },
    {
      id: 2,
      gameId: 'tennis',
      date: today,
      startTime: convertTimeToSec('17:00'),
      endTime: convertTimeToSec('18:45'),
      userName: 'aoliinyk'
    },
    {
      id: 3,
      gameId: 'tennis',
      date: today,
      startTime: convertTimeToSec('16:15'),
      endTime: convertTimeToSec('17:00'),
      userName: 'aoliinyk'
    },
    {
      id: 4,
      gameId: 'tennis',
      date: tomorrow,
      startTime: convertTimeToSec('13:10'),
      endTime: convertTimeToSec('16:35'),
      userName: 'aoliinyk'
    }
  ];
})();

class GamesApi {
  static getAllGamesSchedulesSinceToday() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(gamesSchedules);
      }, delay);
    });
  }

  static saveSchedule(schedule) {
    schedule = Object.assign({}, schedule); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        // const minScheduleTitleLength = 1;
        // if (schedule.title.length < minScheduleTitleLength) {
        //   reject(`Title must be at least ${minScheduleTitleLength} characters.`);
        // }

        if (schedule.id > -1) {
        //   const scheduleIndex = gamesSchedules.findIndex(a => a.id === schedule.id);
        //   gamesSchedules.splice(scheduleIndex, 1, schedule);
        } else {
          schedule.id = gamesSchedules[gamesSchedules.length - 1].id + 1;
          // gamesSchedules.push(schedule);
        }

        resolve(schedule);
      }, delay);
    });
  }
}

export default GamesApi;
