import cn from 'classnames';
import { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';

export type Props = {
  to: string;
  text: string;
};

export const NavItem: FC<Props> = memo(({ to, text }) => (
  <NavLink
    className={({ isActive }) => cn(
      'navbar-item',
      { 'is-active': isActive },
    )}
    to={to}
  >
    {text}
  </NavLink>
));
