import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function sampleReducer(state = initialState.samples, action) {
  switch (action.type) {
    case types.SAMPLE_ACTION:
      return action.payload;

    default:
      return state;
  }
}
