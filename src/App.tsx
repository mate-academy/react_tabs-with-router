/* eslint-disable no-console */
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, NavLink, Outlet, useLocation } from 'react-router-dom';
import cn from 'classnames';

const getClass = ({ isActive }: { isActive: boolean }) =>
  cn('navbar-item', { 'is-active': isActive });

export const App = () => {
  const location = useLocation();
  const { hash, pathname } = location;

  console.log('hash', hash);
  console.log('pathname', pathname);
  if (pathname === '/home') {
    return <Navigate to="/" />;
  }

  return (
    <div>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={getClass}>
              Home
            </NavLink>
            <NavLink to="/tabs" className={getClass}>
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
    </div>
  );
};
