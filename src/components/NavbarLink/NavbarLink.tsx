import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

type Props = {
  path: string,
  text: string,
};

export const NavbarLink: React.FC<Props> = ({ path, text }) => (
  <NavLink
    to={path}
    className={({ isActive }) => classNames(
      'navbar-item',
      { 'is-active': isActive },
    )}
  >
    {text}
  </NavLink>
);
