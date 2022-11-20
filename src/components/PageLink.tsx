import classNames from 'classnames';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  text: string,
  to: string,
};

export const PageLink: FC<Props> = ({ text, to }) => (
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
