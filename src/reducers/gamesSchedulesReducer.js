import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function gamesSchedulesReducer(state = initialState.gamesSchedules, action) {
  switch (action.type) {
    case types.LOAD_GAMES_SCHEDULES_SUCCESS:
      return action.payload;

    case types.CREATE_SCHEDULE_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.payload)
      ];

    case types.UPDATE_SCHEDULE_SUCCESS:
      return [
        ...state.filter(schedule => schedule.id !== action.payload.id),
        Object.assign({}, action.payload)
      ];

    default:
      return state;
  }
}
