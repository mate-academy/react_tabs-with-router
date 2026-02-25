import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { NavLink, Outlet } from 'react-router-dom';
import classNames from 'classnames';

export const App: React.FC = () => {
  function getLinkClass({ isActive }: { isActive: boolean }) {
    return classNames('navbar-item', { 'is-active': isActive });
  }

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="
          navbar
          is-light
          is-fixed-top
          is-mobile
          has-shadow
          has-navbar-fixed-top
        "
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={getLinkClass} end>
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
