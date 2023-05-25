import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { FC } from 'react';
import { LinkProps } from '../TabLink';

export const NavItem: FC<LinkProps> = ({ path, title }) => {
  return (
    <NavLink
      className={({ isActive }) => (
        classNames({ 'has-background-grey-lighter': isActive }, 'navbar-item')
      )}
      to={path}
    >
      {title}
    </NavLink>
  );
};
