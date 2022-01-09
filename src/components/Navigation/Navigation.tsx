import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Navigation.scss';

export const Navigation: React.FC = () => {
  return (
    <div className="navigation">
      <Link
        className="navigation__home"
        to="/"
        style={{ textDecoration: 'none' }}
      >
        <div className="navigation__home--link">
          <p>
            HO
            <br />
            ME
          </p>
        </div>
      </Link>

      <NavLink
        className="navigation__link"
        to="/home"
      >
        Home
      </NavLink>

      <NavLink
        className="navigation__link"
        to="/tabs"
      >
        Tabs
      </NavLink>
    </div>
  );
};
