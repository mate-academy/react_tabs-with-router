import React from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

type Props = {
  to: string;
  navTitle: string;
};

export const PageNavLink: React.FC<Props> = React.memo(
  ({ to, navTitle }) => (
    <NavLink
      to={to}
      className={({ isActive }) => cn(
        'navbar-item',
        { 'is-active': isActive },
      )}
    >
      {navTitle}
    </NavLink>
  ),
);
