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
      startTime: convertTimeToSec('16:10'),
      endTime: convertTimeToSec('16:35'),
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
}

export default GamesApi;
