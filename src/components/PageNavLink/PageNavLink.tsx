import { NavLink } from 'react-router-dom';
import { FC } from 'react';
import classNames from 'classnames';
import { Props } from './Props';

export const PageNavLink: FC<Props> = ({ to, text }) => (
  <NavLink
    to={to}
    className={({ isActive }) => classNames('navbar-item',
      { 'is-active': isActive })}
  >
    {text}
  </NavLink>
);
