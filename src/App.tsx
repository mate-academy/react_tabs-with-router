import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Link, Outlet, useLocation } from 'react-router-dom';
import cn from 'classnames';

export const App = () => {
  const locations = useLocation();

  const isHomePage = locations.pathname === '/';
  const isTabsPage = locations.pathname.startsWith('/tabs');

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
              className={cn('navbar-item', { 'is-active': isHomePage })}
            >
              Home
            </Link>
            <Link
              to="/tabs"
              className={cn('navbar-item', { 'is-active': isTabsPage })}
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
