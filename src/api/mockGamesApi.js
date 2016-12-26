import delay from './delay';

const games = [
  {
    id: 'tennis',
    name: 'Table tennis',
    img: 'tennis.jpg'
  },
  {
    id: 'billiard',
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
