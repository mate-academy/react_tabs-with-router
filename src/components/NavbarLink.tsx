import React from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

interface Props {
  to: string;
  text: string,
}

export const NavbarLink: React.FC<Props> = ({ to, text }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => cn(
        'navbar-item',
        { 'is-active': isActive },
      )}
    >
      {text}
    </NavLink>
  );
};
