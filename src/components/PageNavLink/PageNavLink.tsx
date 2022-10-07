import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

type Props = {
  to: string;
  label: string;
};

export const PageNavLink: React.FC<Props> = ({ to, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) => (classNames(
      'navbar-item',
      { 'is-active': isActive },
    ))}
  >
    {label}
  </NavLink>
);
