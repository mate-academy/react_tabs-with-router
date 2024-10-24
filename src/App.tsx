import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { NavLink, Outlet } from 'react-router-dom';
import classNames from 'classnames';

const getLinkActive = ({ isActive }: { isActive: boolean }) => {
  return classNames('navbar-item', {
    'is-active': isActive,
  });
};

export const App = () => (
  <html className="has-navbar-fixed-top">
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={getLinkActive}>
            Home
          </NavLink>
          <NavLink to="/tabs" className={getLinkActive}>
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
  </html>
);
