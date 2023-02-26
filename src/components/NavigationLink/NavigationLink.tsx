import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

type Props = {
  to: string;
  children: string;
};

export const NavigationLink: React.FC<Props> = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) => classNames('navbar-item', {
      'is-active': isActive,
    })}
  >
    {children}
  </NavLink>
);
