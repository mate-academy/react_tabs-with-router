import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

const navLinks = [
  {
    to: '/',
    title: 'Home',
  },
  {
    to: '/tabs',
    title: 'Tabs',
  },
];

const Navigation: FC = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          {navLinks.map(({ to, title }) => (
            <NavLink
              to={to}
              key={to}
              className={({ isActive }) =>
                cn('navbar-item', {
                  'is-active': isActive,
                })
              }
            >
              {title}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
