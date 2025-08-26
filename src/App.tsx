import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

export const App = () => {
  const { pathname } = useLocation();

  const isHomeActive = pathname.includes('/');
  const isTabsActive = pathname.startsWith('/tabs');

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <ul className="navbar-start">
              <li className={isHomeActive ? 'is-active' : ''}>
                <NavLink className="navbar-item" to="/">
                  Home
                </NavLink>
              </li>
              <li className={isTabsActive ? 'is-active' : ''}>
                <NavLink className="navbar-item" to="/tabs">
                  Tabs
                </NavLink>
              </li>
            </ul>
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
