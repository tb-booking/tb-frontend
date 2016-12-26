import React, {PropTypes} from 'react';
import {loadImage} from '../../helpers/helpers';

const CourseListRow = ({game}) => {
  return (
    <tr>
      <td><img src={loadImage(game.img)} /></td>
      <td>{game.name}</td>
    </tr>
  );
};

CourseListRow.propTypes = {
  game: PropTypes.object.isRequired
};

export default CourseListRow;
