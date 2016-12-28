import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import './gameSchedule.scss';

const GamePage = ({game, gameSchedules}) => {
  return (
    <div>
      Main Games Page for {game.name}
    </div>
  );
};

GamePage.propTypes = {
  gameId: PropTypes.string.isRequired,
  game: PropTypes.object,
  gameSchedules: PropTypes.array
};

function mapStateToProps(state, ownProps) {
  return {
    game: state.games[ownProps.gameId],
    gameSchedules: state.gamesSchedules.reduce((schedules, currentSchedule) => {
      if (currentSchedule.gameId === ownProps.gameId) {
        schedules.push(currentSchedule);
      }
      return schedules;
    }, [])
  };
}

export default connect(mapStateToProps)(GamePage);
