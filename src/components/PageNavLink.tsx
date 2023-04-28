import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

type Props = {
  to: string,
  text: string,
};

const NavBarLink: React.FC<Props> = ({ to, text }) => (
  <NavLink
    to={to}
    className={({ isActive }) => classNames(
      'navbar-item',
      { 'is-active': isActive },
    )}
  >
    {text}
  </NavLink>
);

export default NavBarLink;
