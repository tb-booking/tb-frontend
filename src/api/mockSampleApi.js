import delay from './delay';

const samples = [
  {
    id: '123',
    firstName: 'Hello',
    lastName: 'World'
  }
];

class SampleApi {
  static getAllSamples() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], samples));
      }, delay);
    });
  }
}

export default SampleApi;
