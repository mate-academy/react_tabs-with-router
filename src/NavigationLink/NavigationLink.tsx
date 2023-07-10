import React from 'react';
import { NavLink, To } from 'react-router-dom';
import cn from 'classnames';

type Props = {
  to: To;
  title: string;
};

export const NavigationLink: React.FC<Props> = ({ to, title }) => {
  return (
    <>
      <NavLink
        to={to}
        className={({ isActive }) => cn('navbar-item', {
          'is-active': isActive,
        })}
      >
        {title}
      </NavLink>
    </>
  );
};
