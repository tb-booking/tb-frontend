import expect from 'expect';
import * as gamesSchedulesActions from '../../src/actions/gamesSchedulesActions';
import * as types from '../../src/actions/actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Games Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create BEGIN_AJAX_CALL and LOAD_GAMES_SCHEDULES_SUCCESS when loading games', (done) => {
    // Here's an example call to nock.
    // nock('http://example.com/')
    //   .get('/test')
    //   .reply(200, { body: { sample: [{ id: 1, firstName: 'Hello', lastName: 'World'}] }});

    const expectedActions = [
      {type: types.BEGIN_AJAX_CALL},
      {type: types.LOAD_GAMES_SCHEDULES_SUCCESS, body: []}
    ];

    const store = mockStore({schedules: []}, expectedActions, done);
    store.dispatch(gamesSchedulesActions.getAllGamesSchedules()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_GAMES_SCHEDULES_SUCCESS);
      done();
    });
  });
});
