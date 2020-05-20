import React from 'react';
import { NavLink } from 'react-router-dom';


export const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper  light-blue darken-2 px1">
        <div className="container">
          <a href="/" className="brand-logo">
            Tabs
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/tabs">Tabs</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
