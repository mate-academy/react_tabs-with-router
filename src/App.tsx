import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Outlet, useLocation, Navigate, Link } from 'react-router-dom';

export const App = () => {
  const { pathname } = useLocation();

  if (pathname === '/home') {
    return <Navigate to="/" />;
  }

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
              className={
                pathname === '/' ? 'navbar-item is-active' : 'navbar-item'
              }
            >
              Home
            </Link>
            <Link
              to="/tabs"
              className={
                pathname.startsWith('/tabs')
                  ? 'navbar-item is-active'
                  : 'navbar-item'
              }
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
