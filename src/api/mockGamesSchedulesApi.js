import delay from './delay';
import {formatDateAsDateString} from '../helpers/helpers';

const gamesSchedules = (() => {
  const today = formatDateAsDateString(new Date());

  return [
    {
      id: 1,
      gameId: 'tennis',
      date: today,
      startBookTime: '14:00',
      endBookTime: '15:15'
    },
    {
      id: 2,
      gameId: 'tennis',
      date: today,
      startBookTime: '17:00',
      endBookTime: '17:45'
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
