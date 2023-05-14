import classNames from 'classnames';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  title: string;
  to: string;
}

export const NavToPage: FC<Props> = ({ to, title }) => (
  <NavLink
    to={to}
    className={
      (
        { isActive }
      ) => classNames('navbar-item', { 'is-active': isActive })
    }
  >
    {title}
  </NavLink>
);
