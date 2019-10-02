import React from 'react';

import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav className="nav-underline">
    <NavLink exact className="home-title link" to="/">
      <h1>Home page</h1>
    </NavLink>
    <NavLink className="link" to="/tabs">
      <h1>Tabs page</h1>
    </NavLink>
  </nav>
);

export default NavBar;
