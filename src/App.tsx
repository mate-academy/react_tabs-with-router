import 'bulma/css/bulma.css';
import { NavLink, Outlet } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import cn from 'classnames';

export const App = () => {
  const isActiveNav = ({ isActive }: { isActive: boolean }) => cn(
    'navbar-item', {
      'is-active': isActive,
    },
  );

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={isActiveNav}>
              Home
            </NavLink>
            <NavLink to="/tabs" className={isActiveNav}>
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>
      {/* Also requires <html class="has-navbar-fixed-top"> */}

      <div className="section">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
};
