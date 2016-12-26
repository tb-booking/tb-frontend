import React, {Component} from 'react';
import GamesPage from './GamesPage';
import './game.scss';

class TennisPage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Tennis page</h1>
        <GamesPage gameId="tennis" />
      </div>
    );
  }
}

export default TennisPage;
