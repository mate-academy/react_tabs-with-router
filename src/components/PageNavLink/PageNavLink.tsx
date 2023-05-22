import { NavLink } from 'react-router-dom';
import React from 'react';
import classNames from 'classnames';

interface Props {
  to: string;
  text: string;
}

export const PageNavLink: React.FC<Props> = ({ to, text }) => (
  <NavLink
    to={to}
    className={({ isActive }) => (classNames(
      'navbar-item', { 'is-active': isActive },
    ))}
  >
    {text}
  </NavLink>
);
