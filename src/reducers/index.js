import {combineReducers} from 'redux';
import samples from './sampleReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  samples,
  ajaxCallsInProgress
});

export default rootReducer;
