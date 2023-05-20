import classNames from 'classnames';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  path: string;
  text: string;
};

export const PageNavLink: FC<Props> = ({ path, text }) => (
  <NavLink
    to={path}
    className={({ isActive }) => classNames(
      'navbar-item',
      { 'is-active': isActive },
    )}
  >
    {text}
  </NavLink>
);
