import React from 'react';
import {IndexLink} from 'react-router';
import NavItem from './NavItem';

const Header = () => {
  return (
    <div className="page-header">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <IndexLink className="navbar-brand" to="/">TB-booking</IndexLink>
          </div>

          <div className="navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <NavItem to="/">Home</NavItem>
              <NavItem to="/tennis">Tennis</NavItem>
              <NavItem to="/billiard">Billiard</NavItem>
              <NavItem to="/about">About</NavItem>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
