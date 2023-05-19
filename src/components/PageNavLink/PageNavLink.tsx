import classNames from 'classnames';
import { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  to: string;
  text: string;
}

export const PageNavLink: FC<Props> = memo(({ to, text }) => (
  <NavLink
    className={({ isActive }) => classNames('navbar-item', {
      'is-active': isActive,
    })}
    to={to}
  >
    {text}
  </NavLink>
));
