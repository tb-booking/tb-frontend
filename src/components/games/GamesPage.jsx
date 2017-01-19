import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {browserHistory, hashHistory} from 'react-router';
import GamesList from './GamesList';
import './games.scss';

class GamesPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.redirectGamePage = this.redirectGamePage.bind(this);
  }

  redirectGamePage(game) {
    hashHistory.push('/' + game);
  }

  render() {
    const {games, gamesSchedules} = this.props;
    return (
      <GamesList
        games={games}
        gamesSchedules={gamesSchedules}
        onGameRowClick={this.redirectGamePage} />
    );
  }
}

GamesPage.propTypes = {
  games: PropTypes.object.isRequired,
  gamesSchedules: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    games: state.games,
    gamesSchedules: state.gamesSchedules
  };
}

export default connect(mapStateToProps)(GamesPage);
