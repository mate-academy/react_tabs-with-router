import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => (
  <nav className="Navigation">
    <NavLink
      to="/"
      exact
      className="Navigation__link"
      activeClassName="active"
    >
      Home
    </NavLink>
    <NavLink
      to="/tabs"
      className="Navigation__link"
      activeClassName="active"
    >
      Tabs
    </NavLink>
  </nav>
);

export default Navigation;
