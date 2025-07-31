import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

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
            <NavLink
              to="/"
              className={`navbar-item ${location.pathname === '/' ? 'is-active' : ''}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={`navbar-item ${location.pathname.startsWith('/tabs') ? 'is-active' : ''}`}
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
