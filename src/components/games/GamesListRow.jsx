import React, {PropTypes} from 'react';
import {loadImage} from '../../helpers/helpers';

const CourseListRow = ({game, onGameRowClick}) => {
  onGameRowClick = onGameRowClick.bind(this, game.id);

  return (
      <tr onClick={onGameRowClick}>
        <td><img src={loadImage(game.img)} /></td>
        <td><h3>{game.name}</h3></td>
        <td />
      </tr>
  );
};

CourseListRow.propTypes = {
  game: PropTypes.object.isRequired,
  onGameRowClick: PropTypes.func.isRequired
};

export default CourseListRow;
