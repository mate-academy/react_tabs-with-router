import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavLinks = () => (
  <nav>
    <div className="nav-wrapper">
      <NavLink
        to="/"
        className="brand-logo right"
        exact
      >
        Tabs with router
      </NavLink>
      <ul
        id="nav-mobile"
        className="left hide-on-med-and-down"
      >
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/tabs">Tabs</NavLink></li>
      </ul>
    </div>
  </nav>
);
