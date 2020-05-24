import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationLinks = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <NavLink
            to="/"
            exact
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tabs"
            exact
          >
            Tabs
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavigationLinks;
