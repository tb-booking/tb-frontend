import delay from './delay';
import {formatDateAsDateString, convertTimeToSec} from '../helpers/helpers';

const gamesSchedules = (() => {
  const today = formatDateAsDateString(new Date());

  return [
    {
      id: 1,
      gameId: 'tennis',
      date: today,
      startTime: convertTimeToSec('14:00'),
      endTime: convertTimeToSec('15:15')
    },
    {
      id: 2,
      gameId: 'tennis',
      date: today,
      startTime: convertTimeToSec('16:10'),
      endTime: convertTimeToSec('16:35')
    },
    {
      id: 3,
      gameId: 'tennis',
      date: today,
      startTime: convertTimeToSec('17:00'),
      endTime: convertTimeToSec('18:45')
    }
  ];
})();

class GamesApi {
  static getAllGamesSchedulesByDate(date) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(gamesSchedules.map(game => {
          if (game.date === date) {
            return game;
          }
        }));
      }, delay);
    });
  }

  static getAllTodayGamesSchedules() {
    const d = new Date();
    const today = d.toISOString().substr(0, 10);

    return this.getAllGamesSchedulesByDate(today);
  }
}

export default GamesApi;
