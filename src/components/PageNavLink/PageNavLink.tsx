import React from 'react';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';

type Props = {
  to: string;
};

export const PageNavLink: React.FC<Props> = React.memo(({
  to,
  children,
}) => (
  <NavLink
    to={to}
    className={({ isActive }) => classnames(
      'navbar-item',
      { 'is-active': isActive },
    )}
  >
    {children}
  </NavLink>
));
