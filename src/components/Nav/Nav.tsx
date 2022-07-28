import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

export const Nav = React.memo(() => {
  return (
    <nav className="Nav__list">
      <NavLink
        className="Nav__link"
        to="home"
      >
        Home
      </NavLink>

      <NavLink
        className="Nav__link"
        to="tabs"
      >
        Tabs
      </NavLink>
    </nav>
  );
});
