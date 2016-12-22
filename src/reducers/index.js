import {combineReducers} from 'redux';
import games from './gamesReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  games,
  ajaxCallsInProgress
});

export default rootReducer;
