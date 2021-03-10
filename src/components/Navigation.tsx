import React from 'react';
import './Navigation.scss';
import { NavLink } from 'react-router-dom';

export const Navigation = () => (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink
          to="/tabs"
          className="navbar-item is-tab"
          activeClassName="is-active"
        >
          Tabs
        </NavLink>
        <NavLink
          to="/"
          exact
          className="navbar-item is-tab"
          activeClassName="is-active"
        >
          Home
        </NavLink>
      </div>
    </nav>
);
