import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const Nav: FC = () => (
  <nav>
    <ul className="nav nav-pills nav-fill">
      <li className="nav-item">
        <NavLink to="/" className="nav-link">
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
);
