import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <ul>
      <li>
        <NavLink
          to="/"
          exact
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/tabs"
        >
          Tabs
        </NavLink>
      </li>
    </ul>
  </nav>
);
