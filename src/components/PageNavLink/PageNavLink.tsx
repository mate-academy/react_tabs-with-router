import cn from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  to: string,
  content: string,
}

export const PageNavLink: React.FC<Props> = ({ to, content }) => (
  <NavLink
    to={to}
    className={({ isActive }) => cn(
      'navbar-item',
      { 'is-active': isActive },
    )}
  >
    {content}
  </NavLink>
);
