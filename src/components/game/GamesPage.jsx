import React, {PropTypes} from 'react';

const GamesList = ({gameId}) => {
  return (
    <div>
      Main Games Page for {gameId}
    </div>
  );
};

GamesList.propTypes = {
  gameId: PropTypes.string.isRequired
};

export default GamesList;
