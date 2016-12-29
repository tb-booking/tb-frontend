import {combineReducers} from 'redux';
import username from './usernameReducer';
import games from './gamesReducer';
import gamesSchedules from './gamesSchedulesReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  username,
  games,
  gamesSchedules,
  ajaxCallsInProgress
});

export default rootReducer;
