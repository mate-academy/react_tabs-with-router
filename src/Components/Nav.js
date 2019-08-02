import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <NavLink exact to="/" activeClassName="nav__active-link">Home</NavLink>
      </li>
      <li>
        <NavLink
          exact
          to="/tabs/"
          activeClassName="nav__active-link"
        >
          Tabs
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          to="/tabs/1"
          activeClassName="nav__active-link"
        >
          Error Page
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
