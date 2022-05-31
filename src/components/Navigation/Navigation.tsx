import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation: React.FC = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (
          isActive ? 'navbar-item is-tab is-active' : 'navbar-item is-tab')}
      >
        Home Page
      </NavLink>
      <NavLink
        className={({ isActive }) => (
          isActive ? 'navbar-item is-tab is-active' : 'navbar-item is-tab')}
        to="/tabs"
      >
        Tabs
      </NavLink>
    </nav>
  );
};
