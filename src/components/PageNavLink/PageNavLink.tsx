import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  to: string;
  linkText: string;
};

export const PageNavLink: React.FC<Props> = ({ to, linkText }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => classNames('navbar-item', {
        'is-active': isActive,
      })}
    >
      {linkText}
    </NavLink>
  );
};
