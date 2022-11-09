import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { FC } from 'react';

export interface Props {
  to: string;
  text: string;
}
export const NavbarLink: FC<Props> = ({ to, text }) => (
  <NavLink
    to={to}
    className={({ isActive }) => classNames('navbar-item',
      { 'is-active': isActive })}
  >
    {text}
  </NavLink>
);
