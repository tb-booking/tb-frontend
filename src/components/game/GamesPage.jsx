import React, {PropTypes} from 'react';

const GamePage = ({gameId}) => {
  return (
    <div>
      Main Games Page for {gameId}
    </div>
  );
};

GamePage.propTypes = {
  gameId: PropTypes.string.isRequired
};

export default GamePage;
