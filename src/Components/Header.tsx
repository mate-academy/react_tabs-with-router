import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header: React.FC = () => (
  <header>
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact>Home</NavLink>
          <NavLink to="/tabs">Tabs</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);
