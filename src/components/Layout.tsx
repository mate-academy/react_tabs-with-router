import clsx from 'clsx';
import { Link, Outlet, useLocation } from 'react-router-dom';

export const Layout = () => {
  const location = useLocation();

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link
              to="/"
              className={clsx(
                location.pathname === '/' && 'is-active',
                'navbar-item',
              )}
            >
              Home
            </Link>
            <Link
              to="/tabs"
              className={clsx(
                location.pathname === '/tabs' && 'is-active',
                'navbar-item',
              )}
            >
              Tabs
            </Link>
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
