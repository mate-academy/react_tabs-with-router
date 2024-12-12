import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, NavLink, Outlet, useLocation } from 'react-router-dom';
import classNames from 'classnames';

export const App = () => {
  const NLClass = ({ isActive }: { isActive: boolean }) => {
    return classNames('navbar-item', {
      'is-active': isActive,
    });
  };

  const { pathname } = useLocation();

  return (
    <>
      <html className="has-navbar-fixed-top" />
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={NLClass}>
              Home
            </NavLink>
            <NavLink to="/tabs" className={NLClass}>
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          {pathname === '/home' ? (
            <Navigate to={'/'} replace={true} />
          ) : (
            <Outlet />
          )}
        </div>
      </div>
    </>
  );
};
