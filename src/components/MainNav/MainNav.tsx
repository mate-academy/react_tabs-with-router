import React from 'react';

import { NavLink } from 'react-router-dom';

export const MainNav: React.FC = () => (
  <nav className="navbar">
    <NavLink
      className="navbar__link"
      to="/"
    >
      home
    </NavLink>

    <NavLink
      className="navbar__link"
      to="/tabs"
    >
      tabs
    </NavLink>
  </nav>
);
