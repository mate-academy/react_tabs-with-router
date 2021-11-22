import React from 'react';
import { NavLink } from 'react-router-dom';

export const HeadNavigation: React.FC = () => {
  return (
    <header>
      <h1>Tabs page</h1>
      <nav>
        <NavLink
          to="/react-tabs-with-router/home"
          className="nav__link"
        >
          Home
        </NavLink>
        <NavLink
          to="/react-tabs-with-router/tabs"
          className="nav__link"
        >
          Tabs
        </NavLink>
      </nav>
    </header>
  );
};
