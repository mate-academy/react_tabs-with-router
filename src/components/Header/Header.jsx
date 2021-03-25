import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bulma';

export function Header(props) {
  return (
    <>
      <nav
        className="navbar-brand"
        role="navigation"
        aria-label="main navigation"
      >
        <NavLink
          className="navbar-item is-tab"
          activeClassName="is-active"
          exact
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="navbar-item is-tab"
          activeClassName="is-active"
          to="/tabs"
        >
          Tabs
        </NavLink>
      </nav>
    </>
  );
}
