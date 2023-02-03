import classNames from 'classnames';
import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

export type Props = {
  to: string
  title: string
};

export const PageNavLink: React.FC<Props> = memo(({ to, title }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (
        classNames('navbar-item',
          { 'is-active': isActive })
      )}
    >
      {title}
    </NavLink>
  );
});
