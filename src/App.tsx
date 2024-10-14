import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Outlet, NavLink } from 'react-router-dom';
import classNames from 'classnames';

export const App: React.FC = () => {
  const getActiveLink = ({ isActive }: { isActive: boolean }) =>
    classNames('navbar-item', { 'is-active': isActive });

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={getActiveLink}>
              Home
            </NavLink>
            <NavLink to="/tabs" className={getActiveLink}>
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
