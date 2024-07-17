import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { NavLink, Navigate, Outlet, useLocation } from 'react-router-dom';
import classNames from 'classnames';

export const App = () => {
  const getLinkClass = ({ isActive }: { isActive: boolean }) => {
    return classNames('navbar-item', { 'is-active': isActive });
  };
  const { pathname } = useLocation();
  if (pathname === '/home') {
    return <Navigate to="/" replace />;
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
            <NavLink to="/" className={getLinkClass}>
              Home
            </NavLink>
            <NavLink to="/tabs" className={getLinkClass}>
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
