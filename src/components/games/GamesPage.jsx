import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import GamesList from './GamesList';
import './games.scss';

class GamesPage extends Component {
  render() {
    const {games} = this.props;

    return (
      <div className="">
        <h1>Games Page</h1>
        <GamesList games={games} />
      </div>
    );
  }
}

GamesPage.propTypes = {
  games: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    games: state.games
  };
}

export default connect(mapStateToProps)(GamesPage);
