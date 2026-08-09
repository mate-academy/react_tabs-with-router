import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Link, Outlet, useLocation } from 'react-router-dom';

export const App = () => {
  const location = useLocation();

  return (
    <>
      <nav className="navbar" role="navigation" data-cy="Nav">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link
              to="/"
              className={location.pathname === '/' ? 'is-active' : ''}
            >
              Home
            </Link>
          </div>
          <div className="navbar-item">
            <Link
              to="/tabs"
              className={location.pathname.startsWith('/tabs') ? 'is-active' : ''}
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
