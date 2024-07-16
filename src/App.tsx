import classNames from 'classnames';
import { NavLink, Outlet } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

const getNavClass = ({ isActive }: { isActive: boolean }) =>
  classNames('navbar-item', {
    'is-active': isActive,
  });

export const App = () => (
  <>
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={getNavClass}>
            Home
          </NavLink>
          <NavLink to="/tabs" className={getNavClass}>
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>

    <div className="section">
      <Outlet />
    </div>
  </>
);
