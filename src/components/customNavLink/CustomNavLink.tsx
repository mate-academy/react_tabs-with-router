import { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

interface Props {
  to: string,
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
