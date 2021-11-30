import React, { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Header: FC = React.memo(() => (
  <nav className="navbar">
    <div className="navbar-brand">
      <Link
        to="/"
        className="navbar-item"
      >
        <img
          src="./images/logo.png"
          alt="Mate Academy logo"
          className="logo"
        />
      </Link>

      <NavLink
        to="/"
        exact
        className="navbar-item is-tab"
        activeClassName="is-active"
      >
        Home
      </NavLink>

      <NavLink
        to="/tabs"
        className="navbar-item is-tab"
        activeClassName="is-active"
      >
        Tabs page
      </NavLink>
    </div>
  </nav>
));
