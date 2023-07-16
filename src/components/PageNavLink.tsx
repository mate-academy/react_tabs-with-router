import classNames from 'classnames';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface PageNavLinkProps {
  to: string,
  title: string,
}

export const PageNavLink: FC<PageNavLinkProps> = (props) => {
  const { to, title } = props;

  return (
    <NavLink
      to={to}
      className={
        ({ isActive }) => classNames(
          'navbar-item', { 'is-active': isActive },
        )
      }
    >
      {title}
    </NavLink>
  );
};
