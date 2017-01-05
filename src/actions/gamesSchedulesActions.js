import * as types from './actionTypes';
import GamesSchedulesApi from '../api/mockGamesSchedulesApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function getAllGamesSchedulesSuccess(gamesSchedules) {
  return {type: types.LOAD_GAMES_SCHEDULES_SUCCESS, payload: gamesSchedules};
}

export function getAllGamesSchedules() {
  return dispatch => {
    dispatch(beginAjaxCall());

    return GamesSchedulesApi.getAllGamesSchedulesSinceToday().then(gamesSchedules => {
      dispatch(getAllGamesSchedulesSuccess(gamesSchedules));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
