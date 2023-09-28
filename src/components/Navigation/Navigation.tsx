import classNames from 'classnames';
import { NavLink, Outlet } from 'react-router-dom';

const activeNavLink = ({ isActive }: { isActive: boolean }) => {
  return classNames('navbar-item', {
    'is-active': isActive,
  });
};

export const Navigation = () => {
  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              to="/"
              className={activeNavLink}
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={activeNavLink}
            >
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};
