import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

type Props = {
  to: string,
  text: string,
};

export const PageNavLink: React.FC<Props> = ({ to, text }) => {
  return (
    <NavLink
      className={({ isActive }) => classNames(
        'navbar-item',
        { 'is-active': isActive },
      )}
      to={to}
    >
      {text}
    </NavLink>
  );
};
