import { NavLink, Outlet } from 'react-router-dom';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

import './App.scss';

const getNavLinksClass = ({ isActive }: { isActive: boolean }) =>
  classNames('navbar-item', { 'is-active': isActive });

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={getNavLinksClass}>
            Home
          </NavLink>
          <NavLink to="/tabs" className={getNavLinksClass}>
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>

    <Outlet />
  </>
);
