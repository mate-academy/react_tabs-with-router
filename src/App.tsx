import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Link, Outlet, useLocation } from 'react-router-dom';

export const App = () => {
  const currentPath = useLocation();
  const isHomeActive = currentPath.pathname === '/';

  const isTabsActive = currentPath.pathname.startsWith('/tabs');

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
              to={'/'}
              className={`navbar-item ${isHomeActive ? 'is-active' : ''}`}
            >
              Home
            </Link>

            <Link
              to={'/tabs'}
              className={`navbar-item ${isTabsActive ? 'is-active' : ''}`}
            >
              Tabs
            </Link>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};
