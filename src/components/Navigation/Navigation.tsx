import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

export const Navigation:React.FC<{}> = React.memo(() => {
  return (
    <div className="Navigation">
      <nav className="Navigation__nav">
        <ul className="nav nav-tabs justify-content-center">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/people" className="nav-link">
              People
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
});
