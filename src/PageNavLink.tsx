import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

type PageNavLinkProps = {
  to:string;
  text:string;
};

export const PageNavLink: FC<PageNavLinkProps> = ({ to, text }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => classNames(
        'navbar-item',
        { 'is-active': isActive },
      )}
    >
      {text}
    </NavLink>
  );
};
