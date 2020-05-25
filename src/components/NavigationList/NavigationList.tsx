import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationList.css';

const NavigationList = () => {
  return (
    <div className="nav">
      <ul className="nav__list">
        <li className="nav__link">
          <NavLink
            to="/"
            exact
          >
            Home
          </NavLink>
        </li>
        <li className="nav__link">
          <NavLink
            to="/tabs"
          >
            Tabs
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavigationList;
