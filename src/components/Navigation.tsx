import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => (
  <nav className="Navigation">
    <NavLink
      to="/"
      className="Navigation__link"
      activeClassName="active"
      isActive={(match: any, location: any): boolean => {
        if (!match) {
          return false;
        } else if (location.pathname === '/') {
          return true;
        }

        return false;
      }}
    >
      Home
    </NavLink>
    <NavLink
      to="/tabs"
      className="Navigation__link"
      activeClassName="active"
    >
      Tabs
    </NavLink>
  </nav>
);

export default Navigation;
