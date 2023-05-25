import classNames from 'classnames';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  to: string;
  title: string;
}

export const PageNavLink: FC<Props> = ({ to, title }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => classNames('navbar-item', {
        'is-active': isActive,
      })}
    >
      {title}
    </NavLink>
  );
};
