import cn from 'classnames';
import { FC } from 'react';
import { NavLink, To } from 'react-router-dom';

interface Props {
  directTo: To,
  children: string,
}

export const NavPageLink:FC<Props> = ({ directTo, children }) => (
  <NavLink
    to={directTo}
    className={({ isActive }) => cn('navbar-item', {
      'is-active': isActive,
    })}
  >
    {children}
  </NavLink>
);
