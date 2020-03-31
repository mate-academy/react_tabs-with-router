import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const Nav: FC = () => (
  <nav className="navbar">
    <ul className="navbar__list">
      <li className="navbar__item">
        <NavLink
          to="/"
          className="navbar__link"
          activeClassName="navbar__link--active"
          exact
        >
            Home
        </NavLink>
      </li>
      <li className="navbar__item">
        <NavLink
          to="/tabs"
          className="navbar__link"
          activeClassName="navbar__link--active"
        >
            Tabs
        </NavLink>
      </li>
    </ul>
  </nav>
);
