import React, {PropTypes} from 'react';
import GamesListRow from './GamesListRow';

const GamesList = ({games, onGameRowClick}) => {
  // debugger
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
        {Object.keys(games).map((game) =>
          <GamesListRow key={game} game={games[game]} onGameRowClick={onGameRowClick} />
        )}
      </tbody>
    </table>
  );
};

GamesList.propTypes = {
  games: PropTypes.object.isRequired,
  onGameRowClick: PropTypes.func.isRequired
};

export default GamesList;
