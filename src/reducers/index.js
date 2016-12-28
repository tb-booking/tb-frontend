import {combineReducers} from 'redux';
import games from './gamesReducer';
import gamesSchedules from './gamesSchedulesReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  games,
  gamesSchedules,
  ajaxCallsInProgress
});

export default rootReducer;
