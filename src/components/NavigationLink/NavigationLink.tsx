import React from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

type Props = {
  to: string,
  title: string,
};

export const NavigationLink: React.FC<Props> = ({ to, title }) => {
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
