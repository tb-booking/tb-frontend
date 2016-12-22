import React, {PropTypes} from 'react';

const CourseListRow = ({game}) => {
  return (
    <tr>
      <td>{game.id}</td>
      <td>{game.name}</td>
      <td>{game.img}</td>
    </tr>
  );
};

CourseListRow.propTypes = {
  game: PropTypes.object.isRequired
};

export default CourseListRow;
