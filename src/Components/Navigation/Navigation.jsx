import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => (
  <nav className="navbar">
    <div className="container">
          <NavLink
            to="/"
            exact
            className="btn btn-primary"
            activeClassName="active"
          >
            Home
          </NavLink>

          <NavLink
            to="/tabs"
            className="btn btn-primary"
            activeClassName="active"
          >
            Tabs
          </NavLink>

    </div>
  </nav>
);
