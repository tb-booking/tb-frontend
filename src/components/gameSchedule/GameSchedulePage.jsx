import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {loadImage} from '../../helpers/helpers';
import ScheduleTable from './ScheduleTable';
import './gameSchedule.scss';

class GamePage extends Component {
  componentDidMount() {
    const nowTemp = new Date();
    const now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

    const dp = $('.datepicker').datepicker({
      startDate: '0',
      endDate: '+14d'
    });

    dp.datepicker('setDate', now);
  }

  render() {
    const game = this.props.game;
    return (
      <div className="row" id="game-schedule">
        <h1 className="text-center">{game.name}</h1>
        <div className="col-md-4 text-center">
          <img src={loadImage(game.img)} />
          <div className="datepicker" />
        </div>

        <div className="col-md-8">
          <ScheduleTable />
        </div>
      </div>
    );
  }
}

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
