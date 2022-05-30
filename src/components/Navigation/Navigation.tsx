import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.scss';

export const Navigation: React.FC = () => (
  <nav className="navigation">
    <div>
      <NavLink
        to="/"
        className="navigation__nav"
      >
        Home
      </NavLink>

      <NavLink
        to="/tabs"
        className="navigation__nav"
      >
        Tabs
      </NavLink>
    </div>
  </nav>
);
