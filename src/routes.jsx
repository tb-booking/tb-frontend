import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import GamesPage from './components/games/GamesPage';
import AboutPage from './components/about/AboutPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={GamesPage}/>
    <Route path="about" component={AboutPage} />
  </Route>
);
