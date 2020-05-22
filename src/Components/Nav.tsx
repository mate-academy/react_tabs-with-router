import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav: React.FC = () => (
  <header>
    <nav className="Nav">
      <ul className="Nav__list">
        <li className="Nav__item">
          <NavLink
            to="/"
            exact
            className="Nav__item"
          >
            Home
          </NavLink>
        </li>
        <li className="Nav__item">
          <NavLink
            to="/tabs"
            className="Nav__item"
          >
            Tabs
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);
