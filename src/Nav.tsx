import React from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

const activeClass = (isActive: boolean) => {
  return classnames('navbar-item', {
    isActive,
  });
};

export const Nav: React.FC = () => (
  <nav className="navbar is-fixed-top has-background-light" data-cy="nav">
    <div className="navbar-menu">
      <div className="navbar-start">
        <NavLink
          to="/home"
          className={({ isActive }) => activeClass(isActive)}
        >
          Home
        </NavLink>
        <NavLink
          to="/tabs"
          className={({ isActive }) => activeClass(isActive)}
        >
          Tabs
        </NavLink>
      </div>
    </div>
  </nav>
);
