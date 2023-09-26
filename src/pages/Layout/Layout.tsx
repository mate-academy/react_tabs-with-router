import classNames from 'classnames';
import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  const isActiveClassName = ({ isActive }: { isActive: boolean }) => classNames(
    'navbar-item',
    { 'is-active': isActive },
  );

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              to="/"
              className={isActiveClassName}
            >
              Home
            </NavLink>
            <NavLink
              to="../tabs"
              className={isActiveClassName}
            >
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
};
