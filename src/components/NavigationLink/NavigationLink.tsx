import cn from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavigationLinkProps {
  to: string;
  title: string
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  to,
  title,
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => cn(
        'navbar-item', {
          'is-active': isActive,
        },
      )}
    >
      {title}
    </NavLink>
  );
};
