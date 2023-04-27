import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  link: string
  text: string
};

export const NavigationLink: React.FC<Props> = ({ link, text }) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) => classNames(
        'navbar-item',
        { 'is-active': isActive },
      )}
    >
      {text}
    </NavLink>
  );
};
