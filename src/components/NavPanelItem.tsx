import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

type Props = {
  link: string,
  text: string,
};

export const NavPanelItem: React.FC<Props> = ({ link, text }) => {
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
