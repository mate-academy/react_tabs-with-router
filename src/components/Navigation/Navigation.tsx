import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation:React.FC<{}> = React.memo(() => {
  return (
    <div className="Navigation">
      <nav className="Navigation__nav">
        <ul className="nav nav-tabs justify-content-center">
          <li className="nav-item">
            <NavLink to="/home" className="nav-link">
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/tabs" className="nav-link">
              Tabs
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
});
