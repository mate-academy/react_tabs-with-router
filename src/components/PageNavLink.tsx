import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { FC } from 'react';

type Props = {
  to: string;
  text: string;
  end: boolean;
};

export const PageNavLink: FC<Props> = ({ to, text, end }) => (
  <NavLink
    end={end}
    to={to}
    className={({ isActive }) => classNames(
      'navbar-item', { 'is-active': isActive },
    )}
  >
    {text}
  </NavLink>
);
