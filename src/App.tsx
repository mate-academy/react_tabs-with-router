import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Link, Outlet, useLocation } from 'react-router-dom';

export const App: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isHomeActive = currentPath === '/' || currentPath === '/home';
  const isTabsActive =
    currentPath === '/tabs' || currentPath.startsWith('/tabs/');

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
              className={`navbar-item ${isHomeActive ? 'is-active' : ''}`}
              data-cy="HomeLink"
            >
              Home
            </Link>
            <Link
              to="/tabs"
              className={`navbar-item ${isTabsActive ? 'is-active' : ''}`}
              data-cy="TabsLink"
            >
              Tabs
            </Link>
          </div>
        </div>
      </nav>

      <div className="section">
        <Outlet />
      </div>
    </>
  );
};
