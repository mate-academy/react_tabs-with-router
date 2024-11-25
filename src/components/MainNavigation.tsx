import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const MainNavigation: React.FC = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            to="/"
            end
            className={({ isActive }) => {
              return classNames('navbar-item', { 'is-active': isActive });
            }}
          >
            Home
          </NavLink>

          <NavLink
            to="/tabs"
            className={({ isActive }) => {
              return classNames('navbar-item', { 'is-active': isActive });
            }}
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
