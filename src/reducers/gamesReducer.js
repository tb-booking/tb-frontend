import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function sampleReducer(state = initialState.games, action) {
  switch (action.type) {
    case types.LOAD_GAMES_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}
