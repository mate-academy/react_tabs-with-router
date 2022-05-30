import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

export const Header:React.FC = () => (
  <nav className="navbar is-dark">
    <div className="navbar-brand">
      <NavLink
        to="/"
        exact
        className="navbar-item"
        activeClassName="is-active"
      >
        Home
      </NavLink>
      <NavLink
        to="/tabs"
        exact
        className="navbar-item"
        activeClassName="is-active"
      >
        Tabs
      </NavLink>
    </div>
  </nav>
);
