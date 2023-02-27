import React from 'react';
import { NavLink, To } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  text: string;
  to:To;
};

export const NavLinkPage:React.FC<Props> = ({ to, text }) => {
  return (

    <NavLink
      to={to}
      className={({ isActive }) => classNames('navbar-item',
        { 'is-active': isActive })}
    >
      {text}
    </NavLink>
  );
};
