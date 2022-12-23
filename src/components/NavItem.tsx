import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  name: string,
}

export const NavItem: React.FC<Props> = ({ name }) => (
  <NavLink
    to="/"
    className={({ isActive }) => (
      classNames('navbar-item',
        { 'is-active': isActive }))}
  >
    {name}
  </NavLink>
);
