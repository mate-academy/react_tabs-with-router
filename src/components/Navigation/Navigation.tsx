import React from 'react';
import { NavLink as Link } from 'react-router-dom';

import './Navigation.scss';

export const Navigation: React.FC = () => (
  <nav className="navigation">
    <Link
      to="/"
      className="navigation__nav"
      // activeClassName="active"
      end
    >
      Home
    </Link>

    <Link
      to="/tabs"
      className="navigation__nav"
      // activeClassName="active"
    >
      Tabs
    </Link>
  </nav>
);
