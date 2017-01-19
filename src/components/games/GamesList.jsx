import React, {PropTypes} from 'react';
import GamesListRow from './GamesListRow';
import {getSortedScheduleForChosenDate, convertTimeToSec} from '../../helpers/helpers';
import {FREE_SCHEDULE_STATUS, BUSY_SCHEDULE_STATUS} from '../../helpers/constants';

const GamesList = ({games, gamesSchedules, onGameRowClick}) => {
  const gamesListRows = Object.keys(games).map((gameId) => {
    const now = new Date();
    const gameSchedule = getSortedScheduleForChosenDate(gamesSchedules, gameId, now);
    const time = convertTimeToSec(now.getHours() + ':' + now.getMinutes());

    let gameCurrentStatus = FREE_SCHEDULE_STATUS;
    let gameFreeTime = 0;
    gameSchedule.forEach(schedule => {
      if (schedule.startTime < time && schedule.endTime > time) {
        gameCurrentStatus = BUSY_SCHEDULE_STATUS;
        gameFreeTime = schedule.endTime;
      }
      if (gameCurrentStatus === BUSY_SCHEDULE_STATUS && gameFreeTime >= schedule.startTime) {
        gameFreeTime = schedule.endTime;
      }
    });

    return (<GamesListRow
      key={gameId}
      game={games[gameId]}
      gameCurrentStatus={gameCurrentStatus}
      gameFreeTime={gameFreeTime}
      onGameRowClick={onGameRowClick} />);
  });

  return (
    <table id="games-list" className="table table-hover">
      <thead>
        <tr>
          <th />
          <th>game</th>
          <th>status</th>
        </tr>
      </thead>
      <tbody>
        {gamesListRows}
      </tbody>
    </table>
  );
};

GamesList.propTypes = {
  games: PropTypes.object.isRequired,
  gamesSchedules: PropTypes.array.isRequired,
  onGameRowClick: PropTypes.func.isRequired
};

export default GamesList;
