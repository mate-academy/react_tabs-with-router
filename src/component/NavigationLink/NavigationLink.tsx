import React from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

type Props = {
  addr: string;
  content: string;
};

export const NavigationLink: React.FC<Props> = ({ addr, content }) => {
  return (
    <NavLink
      end
      to={addr}
      className={({ isActive }) => cn('navbar-item', {
        'is-active': isActive,
      })}
    >
      {content}
    </NavLink>
  );
};
