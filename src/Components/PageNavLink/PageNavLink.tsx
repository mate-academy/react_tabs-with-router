import cn from 'classnames';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  to: string,
  title: string,
};

export const PageNavLink: FC<Props> = ({ to, title }) => (
  <NavLink
    to={to}
    className={({ isActive }) => cn('navbar-item', {
      'is-active': isActive,
    })}
  >
    {title}
  </NavLink>
);
