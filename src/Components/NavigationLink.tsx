import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

interface Props {
  to: string;
  name: string;
}

export const NavigationLink: React.FC<Props> = memo(({ to, name }) => (
  <NavLink
    to={to}
    className={({ isActive }) => cn('navbar-item', { 'is-active': isActive })}
  >
    {name}
  </NavLink>
));
