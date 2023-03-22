import { NavLink } from 'react-router-dom';
import { FC } from 'react';
import classNames from 'classnames';

type Props = {
  to: string;
  title: string;
};

export const PageNavLink: FC<Props> = ({ to, title }) => (
  <NavLink
    to={to}
    className={({ isActive }) => classNames(
      'navbar-item',
      {
        'is-active': isActive,
      },
    )}
  >
    {title}
  </NavLink>
);
