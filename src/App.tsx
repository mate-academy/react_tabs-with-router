import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import classNames from 'classnames';

export const App = () => {
  const location = useLocation();

  const getLinkClassHome = () =>
    classNames({
      'is-active': location.pathname === '/',
    });

  const getLinkClassTabs = () =>
    classNames({
      'is-active': location.pathname.startsWith('/tabs'),
    });

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <div
              className={getLinkClassHome()}
            >
              <NavLink to="/" className='navbar-item'>
                Home
              </NavLink>
            </div>
            <div
              className={getLinkClassTabs()}
            >
              <NavLink to="/tabs" className='navbar-item'>
                Tabs
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      <div className="section">
        <Outlet />
      </div>
    </>
  );
};
