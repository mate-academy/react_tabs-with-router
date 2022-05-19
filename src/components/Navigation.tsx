import React from 'react';

import classNames from 'classnames';

import { NavLink } from 'react-router-dom';

export const Navigation: React.FC = () => {
  return (
    <div className="navbar is-light has-shadow">
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            to="/"
            className={({ isActive }) => (
              classNames('navbar-item', 'is-tab', { 'is-active': isActive })
            )}
          >
            Home
          </NavLink>
          <NavLink
            to="/tabs"
            className={({ isActive }) => (
              classNames('navbar-item', 'is-tab', { 'is-active': isActive })
            )}
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </div>
  );
};
