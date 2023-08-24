import classNames from 'classnames';

import {
  NavLink,
  Outlet,
} from 'react-router-dom';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const App = () => {
  const getLinkClass = ({ isActive }: { isActive: boolean }) => {
    return classNames(
      'navbar-item',
      { 'is-active': isActive },
    );
  };

  return (
    // <html className="has-navbar-fixed-top" />
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              to="/"
              className={getLinkClass}
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={getLinkClass}
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
