import { FC } from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

export interface Props {
  to: string;
  text: string;
}

export const TabsNavLink: FC<Props> = ({ to, text }) => (
  <NavLink
    to={to}
    className={({ isActive }) => cn('navbar-item', {
      'is-active': isActive,
    })}
  >
    {text}
  </NavLink>
);
