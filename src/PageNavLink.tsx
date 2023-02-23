import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

type Props ={
  to: string;
  text: string;
};

export const PageNavLink: FC<Props> = ({ to, text }) => (
  <NavLink
    to={to}
    className={(classNameArgs) => classNames(
      'navbar-item',
      { 'is-active': classNameArgs.isActive },
    )}
  >
    {text}
  </NavLink>    
);
