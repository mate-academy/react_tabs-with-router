import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  to: string;
  textLink: string;
};

export const PageNavLink: React.FC<Props> = ({
  to, textLink,
}) => (
  <NavLink
    to={to}
    className={({ isActive }) => classNames(
      'navbar-item',
      { 'is-active': isActive },
    )}
  >
    {textLink}
  </NavLink>
);
