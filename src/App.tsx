import classNames from 'classnames';
import { Link, Outlet, useLocation } from 'react-router-dom';

export const App = () => {
  const location = useLocation();

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link
              to="/"
              className={classNames('navbar-item', {
                'is-active': location.pathname === '/',
              })}
            >
              Home
            </Link>
            <Link
              to="/tabs"
              className={classNames('navbar-item', {
                'is-active': location.pathname.startsWith('/tabs'),
              })}
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

//  {/* Also requires <html class="has-navbar-fixed-top"> */}
