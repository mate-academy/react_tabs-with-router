import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { NavLink, Outlet } from 'react-router-dom';
import classNames from 'classnames';

// eslint-disable-next-line @typescript-eslint/no-shadow
export const isActive = ({ isActive }: { isActive: boolean }) =>
  classNames('navbar-item', {
    'is-active': isActive,
  });

export const App = () => (
  <div className="has-navbar-fixed-top">
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={isActive} end>
            Home
          </NavLink>
          <NavLink to="/tabs" className={isActive}>
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
