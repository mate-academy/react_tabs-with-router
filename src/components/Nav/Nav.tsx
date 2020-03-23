import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

export const Nav: FC = () => (
  <nav>
    <ul className="nav">
      <li className="nav__item">
        <NavLink to="/" exact className="nav__link" activeClassName="nav__link_active">
          Home
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink to="/tabs" exact className="nav__link" activeClassName="nav__link_active">
          Tabs
        </NavLink>
      </li>
    </ul>
  </nav>
);
