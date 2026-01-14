import '@fortawesome/fontawesome-free/css/all.css';
import 'bulma/css/bulma.css';
import classNames from 'classnames';
import { NavLink, Outlet } from 'react-router-dom';
import './App.scss';

const getLinkClassName = ({ isActive }: { isActive: boolean }) => {
  return classNames('navbar-item', { 'is-active': isActive });
};

export const App = () => (
  <>
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={getLinkClassName}>
            Home
          </NavLink>

          <NavLink to="/tabs" className={getLinkClassName}>
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
