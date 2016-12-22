// integration store test

import expect from 'expect';
import {createStore} from 'redux';
import rootReducer from '../../src/reducers';
import initialState from '../../src/reducers/initialState';
import * as gamesActions from '../../src/actions/gamesActions';

describe('Store', () => {
  it('Should handle getAllGames', () => {
    // arrange
    const store = createStore(rootReducer, initialState);
    const games = [{
      id: '1',
      name: 'Table tennis',
      img: '/images/table-tennis.png'
    }];
    // make action
    const action = gamesActions.getAllGamesSuccess(games);
    store.dispatch(action);

    // assert
    const actual = store.getState().games;

    expect(actual).toEqual(games);
  });
});
