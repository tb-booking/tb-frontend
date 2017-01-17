import React, {PropTypes} from 'react';

const UsernameItem = ({username}) => {
  if (!username) {
    return (
      <p className="btn btn-default navbar-text navbar-right">Sign in</p>
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
