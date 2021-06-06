import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

const Header = () => (
  <nav className="Navigation">
    <NavLink
      className="Navigation__link"
      to="/home"
      activeClassName="active"
      isActive={(match, location) => location.pathname === '/'}
    >
      <span>Home</span>
    </NavLink>
    <NavLink
      className="Navigation__link"
      to="/people"
      activeClassName="active"
    >
      <span>People</span>
    </NavLink>
  </nav>
);

export default Header;
