import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.scss';

export const Navigation = () => (
  <nav className="nav">
    <ul className="nav__list">
      <li>
        <NavLink
          to="/"
          exact
          className="nav__item"
          activeClassName="nav__item--active"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/tabs"
          className="nav__item"
          activeClassName="nav__item--active"
        >
          Tabs
        </NavLink>
      </li>
    </ul>
  </nav>
);
