import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bulma';

import './Header.scss';

export const Header: React.FC = () => (
  <div className="Header">
    <NavLink
      to="/"
      exact
      className="navbar-item is-tab"
      activeClassName="is-active"
    >
      Home
    </NavLink>
    <NavLink
      to="/tabs"
      className="navbar-item is-tab"
      activeClassName="is-active"
    >
      Tabs
    </NavLink>
  </div>
);
