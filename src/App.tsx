import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import classNames from 'classnames';
import './App.scss';
import { NavLink, Outlet } from 'react-router-dom';

export const App = () => {
  const getActiveClass = ({ isActive }: { isActive: boolean }) => {
    return classNames('navbar-item', { 'is-active': isActive });
  };

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={getActiveClass}>Home</NavLink>
            <NavLink to="/tabs" className={getActiveClass}>Tabs</NavLink>
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
