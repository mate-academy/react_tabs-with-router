import { Outlet, Link, useLocation } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

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
            <div className="navbar-item">
              <Link
                to="/"
                className={location.pathname === '/' ? 'is-active' : ''}
              >
                Home
              </Link>
            </div>
            {/* Tabs */}
            <div className="navbar-item">
              <Link
                to="/tabs"
                className={
                  location.pathname.startsWith('/tabs') ? 'is-active' : ''
                }
              >
                Tabs
              </Link>
            </div>
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
