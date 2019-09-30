import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNav = () => (
  <nav>
    <ul className="main-menu">
      <li className="main-menu__li">
        <NavLink
          className="main-menu__link button"
          to="/"
          exact
        >
          Home
        </NavLink>
      </li>
      <li className="main-menu__li">
        <NavLink
          className="main-menu__link button"
          to="/tabs"
        >
          Tabs
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default MainNav;
