import React from "react";
import { NavLink } from "react-router-dom";

import './Header.scss';

export const Header: React.FC = () => (
  <div className="header">
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item">
          <NavLink
            className="header__nav-link"
            activeClassName="nav-link-active"
            exact
            to="/"
          >
            Home page
          </NavLink>
        </li>
        <li className="header__nav-item">
          <NavLink
            className="header__nav-link"
            activeClassName="nav-link-active"
            to="/tabs"
          >
            Tabs page
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>
);
