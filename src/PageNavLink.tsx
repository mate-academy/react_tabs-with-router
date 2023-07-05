import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

interface PageNavLinkProps {
  to: string,
  text: string,
}

export const PageNavLink: React.FC<PageNavLinkProps> = ({ to, text }) => (
  <NavLink
    to={to}
    className={({ isActive }) => classNames('navbar-item ', {
      'is-active': isActive,
    })}
  >
    {text}
  </NavLink>
);
