import cn from 'classnames';
import React from 'react';
import { NavLink, To } from 'react-router-dom';

interface Props {
  to: To;
  title: string;
}

export const NavigationLink: React.FC<Props> = ({ to, title }) => (
  <NavLink
    to={to}
    className={(cnArgs) => cn(
      'navbar-item', {
        'is-active': cnArgs.isActive,
      },
    )}
  >
    {title}
  </NavLink>
);
