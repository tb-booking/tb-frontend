// integration store test

import expect from 'expect';
import {createStore} from 'redux';
import rootReducer from '../../src/reducers';
import initialState from '../../src/reducers/initialState';
import * as testActions from '../../src/actions/sampleActions';

describe('Store', () => {
  it('Should handle creating courses', () => {
    // arrange
    const store = createStore(rootReducer, initialState);
    const sampleData = {
      title: 'Hello World'
    };
    // make action
    const action = testActions.loadSamplesSuccess(sampleData);
    store.dispatch(action);

    // assert
    const actual = store.getState().samples;

    const expected = {
      title: 'Hello World'
    };

    expect(actual).toEqual(expected);
  });
});
