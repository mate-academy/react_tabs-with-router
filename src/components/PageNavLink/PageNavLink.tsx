import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { FC } from 'react';

type Props = {
  text: string;
  to: string;
};

export const PageNavLink: FC<Props> = ({ text, to }) => (
  <NavLink
    to={to}
    className={({ isActive }) => classNames(
      'navbar-item',
      { 'is-active': isActive },
    )}
  >
    {text}
  </NavLink>
);
