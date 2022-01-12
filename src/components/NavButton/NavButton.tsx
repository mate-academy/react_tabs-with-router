import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  usePath: string,
  useName: string,
};

export const NavButton: React.FC<Props> = ({ usePath, useName }) => (
  <NavLink
    type="button"
    to={usePath}
    className={({ isActive }) => classNames(
      'navbar-item',
      'is-tab',
      { 'is-active': isActive },
    )}
  >
    {useName}
  </NavLink>
);
