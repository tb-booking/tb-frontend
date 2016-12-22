import expect from 'expect';
import * as sampleActions from '../../src/actions/sampleActions';
import * as types from '../../src/actions/actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create BEGIN_AJAX_CALL and SAMPLE_ACTION when loading', (done) => {
    // Here's an example call to nock.
    // nock('http://example.com/')
    //   .get('/test')
    //   .reply(200, { body: { sample: [{ id: 1, firstName: 'Hello', lastName: 'World'}] }});

    const expectedActions = [
      {type: types.BEGIN_AJAX_CALL},
      {type: types.SAMPLE_ACTION, body: {sample: [{id: 1, firstName: 'Hello', lastName: 'World'}]}}
    ];

    const store = mockStore({courses: []}, expectedActions, done);
    store.dispatch(sampleActions.loadSamples()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.SAMPLE_ACTION);
      done();
    });
  });
});
