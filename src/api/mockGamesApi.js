import delay from './delay';

const games = [
  {
    id: '1',
    name: 'Table tennis',
    img: 'tennis.jpg'
  },
  {
    id: '2',
    name: 'Billiard',
    img: 'billiard.jpg'
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
