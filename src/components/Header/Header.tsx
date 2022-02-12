import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header: React.FC = () => (
  <header className="Header">
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'Header__Link Header__Link--active' : 'Header__Link')}
      >
        Home
      </NavLink>
      <NavLink
        to="/tabs"
        className={({ isActive }) => (isActive ? 'Header__Link Header__Link--active' : 'Header__Link')}
      >
        Tabs
      </NavLink>
    </nav>
  </header>
);
