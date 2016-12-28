// integration store test

import expect from 'expect';
import {createStore} from 'redux';
import rootReducer from '../../src/reducers';
import initialState from '../../src/reducers/initialState';
import * as gamesSchedulesActions from '../../src/actions/gamesSchedulesActions';

describe('Store', () => {
  it('Should handle getAllGamesSchedules', () => {
    // arrange
    const store = createStore(rootReducer, initialState);
    const gamesSchedules = (() => {
      const d = new Date();
      const today = d.toISOString().substr(0, 10);

      return [
        {
          id: 1,
          gameId: 'tennis',
          date: today,
          startBookTime: '14:00',
          endBookTime: '15:00'
        }
      ];
    })();

    // make action
    const action = gamesSchedulesActions.getAllGamesSchedulesSuccess(gamesSchedules);
    store.dispatch(action);

    // assert
    const actual = store.getState().gamesSchedules;

    expect(actual).toEqual(gamesSchedules);
  });
});
