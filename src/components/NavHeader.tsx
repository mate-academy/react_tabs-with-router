import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

const NavHeader: React.FC = () => {
  return (
    <div className="navbar-brand">
      <NavLink
        to="/"
        className={({ isActive }) => {
          return cn('navbar-item', {
            'is-active': isActive,
          });
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/tabs"
        className={({ isActive }) => {
          return cn('navbar-item', {
            'is-active': isActive,
          });
        }}
      >
        Tabs
      </NavLink>
    </div>
  );
};

export default NavHeader;
