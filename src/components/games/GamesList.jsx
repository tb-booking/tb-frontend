import React, {PropTypes} from 'react';
import GamesListRow from './GamesListRow';

const GamesList = ({games}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Img</th>
          <th>game</th>
        </tr>
      </thead>
      <tbody>
        {games.map(game =>
          <GamesListRow key={game.id} game={game} />
        )}
      </tbody>
    </table>
  );
};

GamesList.propTypes = {
  games: PropTypes.array.isRequired
};

export default GamesList;
