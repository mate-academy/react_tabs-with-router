import classnames from 'classnames';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

type PageNavLinkProps = {
  to: string,
  title: string;
};

export const PageNavLink: FC<PageNavLinkProps> = ({ to, title }) => {
  return (
    <NavLink
      className={({ isActive }) => classnames('navbar-item',
        { 'is-active': isActive })}
      to={to}
    >
      {title}
    </NavLink>
  );
};
