import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';


export const NavLinks: FC = () => (
  <nav>
    <ul className="nav-list">
      <li className="nav-item">
        <NavLink
          to="/"
          exact
          className="nav-link"
          activeClassName="nav-link--active"
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/tabs"
          className="nav-link"
          activeClassName="nav-link--active"
        >
          Tabs
        </NavLink>
      </li>
    </ul>
  </nav>
);
