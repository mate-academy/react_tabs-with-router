import classNames from 'classnames';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  to: string;
  text: string;
}

export const MenuLink: FC<Props> = ({ to, text }) => (
  <NavLink
    to={to}
    className={({ isActive }) => classNames('navbar-item', {
      'is-active': isActive,
    })}
  >
    {text}
  </NavLink>
);
