import { NavLink, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import classNames from 'classnames';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import 'bulma/css/bulma.css';

const navLinkActive = ({ isActive }: { isActive: boolean }) => {
  return classNames('navbar-item', { 'is-active': isActive });
};

export const App = () => {
  useEffect(() => {
    document.documentElement.classList.add('has-navbar-fixed-top');

    return () =>
      document.documentElement.classList.remove('has-navbar-fixed-top');
  }, []);

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={navLinkActive}>
              Home
            </NavLink>
            <NavLink to="/tabs" className={navLinkActive}>
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
