import React, {Component} from 'react';
import GamesPage from './GamesPage';
import './game.scss';

class BilliardPage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Billiard page</h1>
        <GamesPage gameId="billiard" />
      </div>
    );
  }
}

export default BilliardPage;
