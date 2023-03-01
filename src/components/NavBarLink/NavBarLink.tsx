import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

interface Props {
  linkTitle: string,
  linkPath: string,
}

export const NavBarLink: FC<Props> = ({ linkTitle, linkPath }) => (
  <NavLink
    to={linkPath}
    className={({ isActive }) => cn('navbar-item', {
      'is-active': isActive,
    })}
  >
    {linkTitle}
  </NavLink>
);
