import delay from './delay';
import {formatDateAsDateString, convertTimeToSec} from '../helpers/helpers';

let gamesSchedules = (() => {
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
        if (schedule.userName.length < 3) {
          reject('User name must be at least 3 characters.');
        }
        if (!(schedule.startTime < schedule.endTime)) {
          reject('End time must be bigger then start time.');
        }

        if (schedule.id > 0) {
          gamesSchedules = [
            ...gamesSchedules.filter(gameSchedule => gameSchedule.id !== schedule.id),
            schedule
          ];
        } else {
          schedule.id = gamesSchedules.length + 1;
          gamesSchedules = [...gamesSchedules, schedule];
        }

        resolve(schedule);
      }, delay);
    });
  }
}

export default GamesApi;
