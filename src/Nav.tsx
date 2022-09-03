import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav: React.FC = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            to="/"
            className={({ isActive }) => (
              isActive
                ? 'is-active navbar-item'
                : 'navbar-item')}
          >
            Home
          </NavLink>
          <NavLink
            to="/tabs"
            className={({ isActive }) => (
              isActive
                ? 'is-active navbar-item'
                : 'navbar-item')}
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
