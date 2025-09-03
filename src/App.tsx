import 'bulma/css/bulma.css';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import cn from 'classnames';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const App = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isTabs = location.pathname.startsWith('/tabs');

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <li
              className={cn({
                'is-active': isHome,
              })}
            >
              <NavLink to="/" className="navbar-item">
                Home
              </NavLink>
            </li>
            <li
              className={cn({
                'is-active': isTabs,
              })}
            >
              <NavLink to="/tabs" className="navbar-item">
                Tabs
              </NavLink>
            </li>
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
