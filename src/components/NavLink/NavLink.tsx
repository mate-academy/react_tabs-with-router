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
      className={({ isActive }) => {
        return classNames('navbar-item', {
          'has-background-grey-lighter': isActive,
        });
      }}
    >
      {text}
    </NavLink>
  );
};
