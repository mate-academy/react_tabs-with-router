import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  to: string,
  title: string,
}

export const NavigationLink: React.FC<Props> = ({ to, title }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => classNames(
        'navbar-item',
        { 'is-active': isActive },
      )}
    >
      {title}
    </NavLink>
  );
};
