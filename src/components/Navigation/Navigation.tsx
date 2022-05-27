import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

export const Navigation: React.FC = () => (
  <nav className="navigation">
    <NavLink
      to="/"
      exact
      className="navigation__nav"
      activeClassName="is-active"
    >
      Home
    </NavLink>

    <NavLink
      to="/tabs"
      className="navigation__nav"
      activeClassName="is-active"
    >
      Tabs
    </NavLink>
  </nav>
);
