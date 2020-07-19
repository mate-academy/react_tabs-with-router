import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation: React.FC = () => (
  <nav className="page__nav">
    <NavLink className="page__link" to="/" exact>Home</NavLink>
    <NavLink className="page__link" to="/tabs/">Tabs</NavLink>
  </nav>
);
