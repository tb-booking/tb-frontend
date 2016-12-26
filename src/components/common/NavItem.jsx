import React, {Component, PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

class NavItem extends Component {
  static propTypes = {
    to: PropTypes.string,
    children: PropTypes.string
  };

  static contextTypes = {
    router: PropTypes.object
  };

  render() {
    const {to, children} = this.props;

    const isActive = this.context.router.isActive(to, true);

    return (
      <li className={isActive ? 'active' : ''}>
        <Link to={to}>{children}</Link>
      </li>
    );
  }
}

export default NavItem;
