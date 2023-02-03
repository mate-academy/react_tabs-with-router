import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import className from 'classnames';

type Props = {
  to: string,
  title: string,
};

export const NavBarItems: React.FC<Props> = memo(
  ({ to, title }) => (
    <NavLink
      to={to}
      className={({ isActive }) => className(
        'navbar-item',
        { 'has-background-grey-lighter': isActive },
      )}
    >
      {title}
    </NavLink>
  ),
);
