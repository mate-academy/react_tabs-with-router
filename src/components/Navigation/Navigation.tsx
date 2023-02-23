import { FC } from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

export const Navigation: FC = () => {
  const checkIsLinkActive = (isActive: boolean) => {
    return cn('navbar-item', {
      'is-active': isActive,
    });
  };

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            to="/"
            className={({ isActive }) => checkIsLinkActive(isActive)}
          >
            Home
          </NavLink>
          <NavLink
            to="/tabs"
            className={({ isActive }) => checkIsLinkActive(isActive)}
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
