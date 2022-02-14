import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header: React.FC = () => (
  <header>
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'Link Link--active' : 'Link')}
      >
        Home
      </NavLink>
      <NavLink
        to="/tabs"
        className={({ isActive }) => (isActive ? 'Link Link--active' : 'Link')}
      >
        Tabs
      </NavLink>
    </nav>
  </header>
);
