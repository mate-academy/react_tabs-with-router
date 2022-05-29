import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.scss';

export const Navigation: React.FC = () => (
  <nav className="navigation">
    <div>
      <Link
        to="/"
        className="navigation__nav"
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
    </div>
  </nav>
);
