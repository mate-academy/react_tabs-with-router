import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav className="nav">
    <NavLink
      to="/"
      exact
      className="nav__link"
      activeClassName="is-active"
    >
    Home
    </NavLink>
    <NavLink
      to="/tabs"
      exact
      className="nav__link"
      activeClassName="is-active"
    >
    Tabs
    </NavLink>
  </nav>
);

export default NavBar;
