import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const Header: FC = () => (
  <ul className="menu align-center">
    <li><NavLink activeClassName="is-active" to="/">Home</NavLink></li>
    <li><NavLink activeClassName="is-active" to="/tabs">Tabs</NavLink></li>
  </ul>
);
