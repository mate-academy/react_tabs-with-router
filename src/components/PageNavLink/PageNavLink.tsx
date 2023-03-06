import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  to: string;
  text: string;
};

export const PageNavLink: FC<Props> = ({ to, text }) => (
  <NavLink
    data-cy="Nav"
    className={({ isActive }) => classNames(
      'navbar-item',
      { 'is-active': isActive },
    )}
    to={to}
  >
    {text}
  </NavLink>
);
