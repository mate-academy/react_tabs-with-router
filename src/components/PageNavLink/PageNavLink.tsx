import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

interface PageNavLinkProps {
  to: string;
  title: string
}

export const PageNavLink: FC<PageNavLinkProps> = ({
  to,
  title,
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => cn(
        'navbar-item',
        { 'is-active': isActive },
      )}
    >
      {title}
    </NavLink>
  );
};
