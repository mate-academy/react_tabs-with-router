import { NavLink } from 'react-router-dom';
import React from 'react';

export const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to="/" exact className="nav__link" activeClassName="nav__link--active">
            Home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/tabs" className="nav__link" activeClassName="nav__link--active">
            Tabs
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
