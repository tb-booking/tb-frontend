import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function gamesSchedulesReducer(state = initialState.gamesSchedules, action) {
  switch (action.type) {
    case types.LOAD_GAMES_SCHEDULES_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}
