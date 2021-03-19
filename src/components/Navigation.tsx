import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div>
      <nav>
        <NavLink
          to="/"
          exact
          className="button is-light"
          activeClassName="is-dark"
        >
          Home
        </NavLink>

        <NavLink
          to="/tabs"
          className="button is-light"
          activeClassName="is-dark"
        >
          Tabs
        </NavLink>
      </nav>
    </div>
  );
};
