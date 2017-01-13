import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import routes from './routes';
import {getAllGamesSchedules} from './actions/gamesSchedulesActions';

import 'bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'toastr/build/toastr.min.css';
import './styles/styles.scss';

const store = configureStore();
store.dispatch(getAllGamesSchedules());

render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
