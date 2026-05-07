import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import classNames from 'classnames';

export const App = () => {
  const location = useLocation();

  const homePageActive = location.pathname === '/';
  // I know, an index route would be better for this.

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
              className={({ isActive }) =>
                classNames('navbar-item', {
                  'is-active': isActive,
                })
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={({ isActive }) =>
                classNames('navbar-item', {
                  'is-active': isActive,
                })
              }
            >
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          {homePageActive && <h1 className="title">Home page</h1>}

          <Outlet />
        </div>
      </div>
    </>
  );
};
