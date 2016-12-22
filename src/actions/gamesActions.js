import * as types from './actionTypes';
import GamesApi from '../api/mockGamesApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function getAllGamesSuccess(games) {
  return {type: types.LOAD_GAMES_SUCCESS, payload: games};
}

export function getAllGames() {
  return dispatch => {
    dispatch(beginAjaxCall());

    return GamesApi.getAllGames().then(games => {
      dispatch(getAllGamesSuccess(games));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
