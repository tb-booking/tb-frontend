import React, {PropTypes} from 'react';
import {IndexLink} from 'react-router';
import NavItem from './NavItem';
// import UsernameItem from './UsernameItem';

const Header = ({username}) => {
  return (
    <div className="page-header">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <IndexLink className="navbar-brand" to="/">TB-booking</IndexLink>
          </div>

          <div className="navbar-collapse">
            {/*<UsernameItem username={username} />*/}

            <ul className="nav navbar-nav navbar-right">
              {/*<li className="divider-horizontal" />*/}
              <NavItem to="/">Home</NavItem>
              <NavItem to="/tennis">Tennis</NavItem>
              <NavItem to="/billiard">Billiard</NavItem>
              <NavItem to="/about">About</NavItem>
              {/*<li className="divider-vertical" />*/}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

Header.propTypes = {
  username: PropTypes.string.isRequired
};

export default Header;
