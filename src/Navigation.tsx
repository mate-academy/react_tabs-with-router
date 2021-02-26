import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <NavLink
        className="nav-item nav-link"
        to="/" exact
      >
        Home
      </NavLink>
      <NavLink
        className="nav-item nav-link"
        to="/tabs"
      >
        Tabs
      </NavLink>
    </nav>
  );
};
