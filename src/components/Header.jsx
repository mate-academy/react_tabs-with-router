import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => (
  <div className="navbar is-dark has-shadow">
    <nav className="navbar-brand">
      <NavLink
        to=""
        className={navData => `navbar-item ${navData.isActive ? 'active' : ''}`}
      >
        Home
      </NavLink>

      <NavLink
        to="tabs"
        className={navData => `navbar-item ${navData.isActive ? 'active' : ''}`}
      >
        Tabs
      </NavLink>
    </nav>
  </div>
);
