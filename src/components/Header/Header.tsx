import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <NavLink to="">
        Home page
      </NavLink>
      <NavLink to="/tabs">
        Tabs page
      </NavLink>
    </header>
  );
};
