import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { PageProps } from '../../types/PageProps';

export const LinkPage: React.FC<PageProps> = ({ to, text }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => classNames(
        'navbar-item', { 'is-active': isActive },
      )}
    >
      {text}
    </NavLink>
  );
};
