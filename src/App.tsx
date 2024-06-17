import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import classNames from 'classnames';
import { NavLink, Navigate, Outlet, useLocation } from 'react-router-dom';

export const App = () => {
  const handleTabClassname = ({ isActive }: { isActive: boolean }) =>
    classNames('navbar-item', {
      'is-active': isActive,
    });

  const { pathname } = useLocation();

  if (pathname === '/home') {
    return <Navigate to={'/'} />;
  }

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" end className={handleTabClassname}>
              Home page
            </NavLink>
            <NavLink to="/tabs" className={handleTabClassname}>
              Tabs page
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
