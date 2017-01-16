import * as types from './actionTypes';
import GamesSchedulesApi from '../api/mockGamesSchedulesApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function getAllGamesSchedulesSuccess(gamesSchedules) {
  return {type: types.LOAD_GAMES_SCHEDULES_SUCCESS, payload: gamesSchedules};
}

export function createScheduleSuccess(schedule) {
  return {type: types.CREATE_SCHEDULE_SUCCESS, payload: schedule};
}

export function updateScheduleSuccess(schedule) {
  return {type: types.UPDATE_SCHEDULE_SUCCESS, payload: schedule};
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

export function saveSchedule(gameSchedule) {
  return dispatch => {
    dispatch(beginAjaxCall());

    return GamesSchedulesApi.saveSchedule(gameSchedule).then(schedule => {
      if (schedule.id > -1) {
        dispatch(updateScheduleSuccess(schedule));
      } else {
        dispatch(createScheduleSuccess(schedule));
      }
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
