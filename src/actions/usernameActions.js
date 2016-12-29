import * as types from './actionTypes';

export function setUsername(username) {
  return {type: types.SET_USERNAME, payload: username};
}
