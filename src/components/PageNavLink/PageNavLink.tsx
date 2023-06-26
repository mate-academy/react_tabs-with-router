import React from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

interface Props {
  to: string;
  title: string;
}

export const PageNavLink: React.FC<Props> = ({ to, title }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => cn('navbar-item', {
        'is-active': isActive,
      })}
    >
      {title}
    </NavLink>
  );
};
