import React, {PropTypes} from 'react';
import {getImageUrl} from '../../helpers/helpers';

const GamesListRow = ({game, onGameRowClick}) => {
  onGameRowClick = onGameRowClick.bind(this, game.id);

  return (
      <tr onClick={onGameRowClick}>
        <td><img src={getImageUrl(game.img)} /></td>
        <td><h3>{game.name}</h3></td>
        <td />
      </tr>
  );
};

GamesListRow.propTypes = {
  game: PropTypes.object.isRequired,
  onGameRowClick: PropTypes.func.isRequired
};

export default GamesListRow;
