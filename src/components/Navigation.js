import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav className="Navigation">
    <ul className="Navigation__list">
      <li>
        <NavLink to="/" exact>Home</NavLink>
      </li>

      <li>
        <NavLink to="/tabs">Tabs</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
