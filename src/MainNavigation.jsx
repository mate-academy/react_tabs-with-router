import React from 'react';
import { NavLink } from 'react-router-dom';

export const MainNavigation = () => (
  <nav className="navbar">
    <NavLink
      to="/"
      exact
      className="navbar"
    >
      Home
    </NavLink>
    <NavLink
      to="/tabs"
      className="navbar"
    >
      Tabs
    </NavLink>
  </nav>
);
