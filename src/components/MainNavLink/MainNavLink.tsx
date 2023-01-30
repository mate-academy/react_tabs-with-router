import cn from 'classnames';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  to: string,
  text: string,
};

export const MainNavLink: FC<Props> = ({ to, text }) => (
  <NavLink
    to={to}
    className={({ isActive }) => cn('navbar-item', { 'is-active': isActive })}
  >
    {text}
  </NavLink>
);
