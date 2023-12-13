import { FC } from 'react';
import { NavLink, To } from 'react-router-dom';
import cn from 'classnames';

export interface PageNavLinkProps {
  to: To;
  text: string;
}

export const PageNavLink: FC<PageNavLinkProps> = ({ to, text }) => (
  <NavLink
    to={to}
    className={({ isActive }) => cn('navbar-item', {
      'is-active': isActive,
    })}
  >
    {text}
  </NavLink>
);
