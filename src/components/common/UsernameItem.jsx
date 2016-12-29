import React, {PropTypes} from 'react';

const UsernameItem = ({username}) => {
  if (!username) {
    return (
      <button type="button" className="btn btn-default navbar-btn navbar-right">Sign in</button>
    );
  }
  return (
    <p className="navbar-text navbar-right">Signed in as <a href="#" className="navbar-link">{username}</a></p>
  );
};

UsernameItem.propTypes = {
  username: PropTypes.string.isRequired
};

export default UsernameItem;
