import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation: React.FC = () => (
  <div className="app">
    <h1 className="app_title">Tabs with router</h1>
    <nav className="app_nav">
      <NavLink
        to="/home"
        className={({ isActive }) => (isActive ? 'active' : 'notActive')}
      >
        Home
      </NavLink>
      {' '}
      |
      {' '}
      <NavLink
        to="/tabs"
        className={({ isActive }) => (isActive ? 'active' : 'notActive')}
      >
        Tabs
      </NavLink>
    </nav>
  </div>
);
