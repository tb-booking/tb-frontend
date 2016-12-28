import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import GamesList from './GamesList';
import './games.scss';

class GamesPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.redirectGamePage = this.redirectGamePage.bind(this);
  }

  redirectGamePage(game) {
    browserHistory.push('/' + game);
  }

  render() {
    const {games} = this.props;
    return (
      <GamesList
        games={games}
        onGameRowClick={this.redirectGamePage} />
    );
  }
}

GamesPage.propTypes = {
  games: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    games: state.games
  };
}

export default connect(mapStateToProps)(GamesPage);
