import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar: React.FC = () => {
  return (
    <nav className="navbar is-info" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <NavLink
            to="/"
            className="navbar-item"
          >
            Home
          </NavLink>
          <NavLink
            to="/tabs"
            className="navbar-item"
          >
            Tabs Page
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
