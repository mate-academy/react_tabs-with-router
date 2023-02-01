import cn from 'classnames';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

export type Props = {
  to: string;
  text: string;
};

export const PageNavLink: FC<Props> = ({ to, text }) => (
  <NavLink
    className={({ isActive }) => cn(
      'navbar-item',
      { 'is-active': isActive },
    )}
    to={to}
  >
    {text}
  </NavLink>
);
