import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

interface Props {
  to: string;
  title: string;
}

export const NavLinkCustom: FC<Props> = ({ to, title }) => (
  <NavLink
    to={to}
    className={({ isActive }) => cn('navbar-item', {
      'is-active': isActive,
    })}
  >
    {title}
  </NavLink>
);
