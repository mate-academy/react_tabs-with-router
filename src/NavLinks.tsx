import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavLinks: React.FC = () => (
  <>
    <NavLink className="btn btn-outline-success" to="/" exact>Home</NavLink>
    <NavLink className="btn btn-outline-success" to="/tabs/:id?">Tabs</NavLink>
  </>
);
