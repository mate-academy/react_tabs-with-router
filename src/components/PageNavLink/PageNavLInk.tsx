import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

type Props = {
  to: string;
  linkTitle: string;
};

export const PageNavLink: React.FC<Props> = React.memo(
  ({ to, linkTitle }) => {
    return (
      <NavLink
        to={to}
        className={({ isActive }) => classNames(
          'navbar-item', { 'is-active': isActive },
        )}
      >
        {linkTitle}
      </NavLink>
    );
  },
);
