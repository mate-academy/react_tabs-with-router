import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  link: string;
  title: string;
};

export const NavbarLink: React.FC<Props> = ({ link, title }) => (
  <NavLink
    to={link}
    className={({ isActive }) => classNames(
      'navbar-item',
      { 'is-active': isActive },
    )}
  >
    {title}
  </NavLink>
);
