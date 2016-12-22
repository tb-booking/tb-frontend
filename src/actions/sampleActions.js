import * as types from './actionTypes';
import SampleApi from '../api/mockSampleApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadSamplesSuccess(samples) {
  return {type: types.SAMPLE_ACTION, payload: samples};
}

export function loadSamples() {
  return dispatch => {
    dispatch(beginAjaxCall());

    return SampleApi.getAllSamples().then(samples => {
      dispatch(loadSamplesSuccess(samples));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
