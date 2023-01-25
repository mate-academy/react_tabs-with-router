import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { FC } from 'react';

type NavigationItem = {
  link: string,
  name: string,
};

type Props = {
  navItems: NavigationItem[]
};

export const Navbar: FC<Props> = ({ navItems }) => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          {navItems.map(item => (
            <NavLink
              key={item.link}
              to={item.link}
              className={({ isActive }) => classNames(
                'navbar-item',
                { 'is-active': isActive },
              )}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};
