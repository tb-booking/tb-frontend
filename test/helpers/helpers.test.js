import expect from 'expect';
import {sampleHelper} from '../../src/helpers/helpers';

describe('Helpers tests', () => {
  it('should modify samples data', () => {
    const samples = [
      {id: '123', firstName: 'Hello', lastName: 'World'}
    ];

    const expected = [
      {value: '123', text: 'Hello World'}
    ];

    expect(sampleHelper(samples)).toEqual(expected);
  });
});
