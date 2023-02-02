import React, { memo } from 'react';
import cn from 'classnames';
import { NavLink, To } from 'react-router-dom';

type Props = {
  to: To,
  title: string
};

export const NavItem: React.FC<Props> = memo(({ to, title }) => (
  <NavLink
    to={to}
    className={({ isActive }) => cn(
      'navbar-item',
      { 'is-active': isActive },
    )}
  >
    {title}
  </NavLink>
));
