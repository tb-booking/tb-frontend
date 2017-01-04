import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {getImageUrl, formatDateForDatepicker} from '../../helpers/helpers';
import ScheduleTable from './ScheduleTable';
import './gameSchedule.scss';

class GamePage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      pickedDate: new Date()
    };
  }

  componentDidMount() {
    const dp = $('.datepicker').datepicker({
      startDate: '0',
      endDate: '+14d'
    });

    dp.datepicker('setDate', formatDateForDatepicker(this.state.pickedDate));

    dp.on('changeDate', (e) => {
      const newDate = new Date(e.date);
      this.setState({pickedDate: newDate});
    });

    $('[data-toggle="tooltip"]').tooltip();
  }

  render() {
    const game = this.props.game;
    return (
      <div className="row" id="game-schedule">
        <h1 className="text-center">{game.name}</h1>
        <div className="col-md-4 col-xs-5 text-center">
          <img src={getImageUrl(game.img)} />
          <div className="datepicker" />
          {this.state.pickedDate.toDateString()}
        </div>
        <div className="col-md-8 col-xs-7">
          <ScheduleTable gameSchedules={this.props.gameSchedules} />
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
