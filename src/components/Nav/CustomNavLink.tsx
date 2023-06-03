import React from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

interface Props {
  to: string;
  children: React.ReactNode;
}

export const CustomNavLink: React.FC<Props> = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => cn('navbar-item', { 'is-active': isActive })}
    >
      {children}
    </NavLink>
  );
};
