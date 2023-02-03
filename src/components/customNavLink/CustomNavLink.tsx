import { FC, memo } from 'react';
import { NavLink, To } from 'react-router-dom';
import cn from 'classnames';

interface Props {
  to: To,
  text: string,
}

export const CustomNavLink: FC<Props> = memo(({ to, text }) => (
  <NavLink
    className={({ isActive }) => {
      return cn('navbar-item', {
        'is-active': isActive,
      });
    }}
    to={to}
  >
    {text}
  </NavLink>
));
