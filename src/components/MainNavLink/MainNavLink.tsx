/* eslint-disable no-console */
import classNames from 'classnames';
import { FC } from 'react';
import { NavLink, To } from 'react-router-dom';

interface Props {
  to: To
  title: string
}

export const MainNavLink: FC<Props> = ({ to, title }) => {
  return (
    <NavLink
      to={to}
      className={(args) => classNames(
        'navbar-item',
        { 'is-active': args.isActive },
      )}
    >
      {title}
    </NavLink>
  );
};
