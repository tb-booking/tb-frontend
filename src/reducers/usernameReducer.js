import initialState from './initialState';
import cookies from 'js-cookie';
import * as types from '../actions/actionTypes';

export default function gamesReducer(state = initialState.username, action) {
  switch (action.type) {
    case types.SET_USERNAME:
      const setUsername = action.payload;
      cookies.set('username', setUsername);
      return setUsername;

    default:
      let getUsername = cookies.get('username');
      if (!getUsername) {
        getUsername = state;
      }
      return getUsername;
  }
}
