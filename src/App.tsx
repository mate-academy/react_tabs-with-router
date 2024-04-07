import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import classNames from 'classnames';
import { NavLink, Outlet } from 'react-router-dom';

const geLinkClass = ({ isActive }: { isActive: boolean }) =>
  classNames('navbar-item', {
    'is-active': isActive,
  });

export const App = () => {
  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={geLinkClass}>
              Home
            </NavLink>
            <NavLink to="/tabs" className={geLinkClass}>
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};
