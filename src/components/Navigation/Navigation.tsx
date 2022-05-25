import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.scss';

export const Navigation = React.memo(() => {
  return (
    <div className="navigation">
      <NavLink
        to="/"
        className="navigation__link"
      >
        Home
      </NavLink>

      <NavLink
        to="/cards/tab-1"
        className="navigation__link"
      >
        Tabs
      </NavLink>
    </div>
  );
});
