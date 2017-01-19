import React, {PropTypes} from 'react';
import {getImageUrl, convertSecToTime} from '../../helpers/helpers';
import {BUSY_SCHEDULE_STATUS} from '../../helpers/constants';

const GamesListRow = ({game, onGameRowClick, gameCurrentStatus, gameFreeTime}) => {
  onGameRowClick = onGameRowClick.bind(this, game.id);

  return (
    <tr onClick={onGameRowClick}>
      <td><img src={getImageUrl(game.img)} /></td>
      <td><h3>{game.name}</h3></td>
      <td>
        Table is <b>{gameCurrentStatus === BUSY_SCHEDULE_STATUS ? 'busy' : 'free'} </b> now.
        <br />
        {gameFreeTime ? 'Available in ' + convertSecToTime(gameFreeTime) : ''}
      </td>
    </tr>
  );
};

GamesListRow.propTypes = {
  game: PropTypes.object.isRequired,
  onGameRowClick: PropTypes.func.isRequired,
  gameCurrentStatus: PropTypes.string.isRequired,
  gameFreeTime: PropTypes.number.isRequired
};

export default GamesListRow;
