import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainNavigation.scss';

export const MainNavigation: React.FC = () => {
  return (
    <header>
      <nav
        className="navbar"
        id="nav"
      >
        <p className="navbar-item">Tabs with router</p>
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
      </nav>
    </header>
  )
}