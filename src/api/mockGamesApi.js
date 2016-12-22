import delay from './delay';

const games = [
  {
    id: '1',
    name: 'Table tennis',
    img: '/images/table-tennis.png'
  },
  {
    id: '2',
    name: 'Billiard',
    img: '/images/billiard.png'
  }
];

class GamesApi {
  static getAllGames() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], games));
      }, delay);
    });
  }
}

export default GamesApi;
