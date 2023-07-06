import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  to: string,
  page: string,
};

export const PageNavlink: FC<Props> = ({ to, page }) => (
  <NavLink
    to={to}
    className={({ isActive }) => classNames('navbar-item',
      { 'is-active': isActive })}
  >
    {page}
  </NavLink>
);
