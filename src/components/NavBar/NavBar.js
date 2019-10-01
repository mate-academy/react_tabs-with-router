import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-light">
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink
            exact
            to="/"
            className="nav-link"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/tabs"
            className="nav-link"
          >
            Tabs
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
