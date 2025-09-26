import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Link, Outlet, useLocation } from 'react-router-dom';
import classNames from 'classnames';

export const App = () => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const isTabs = pathname.startsWith('/tabs');

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <div className={classNames('navbar-item', { 'is-active': isHome })}>
              <Link to="/">Home</Link>
            </div>
            <div className={classNames('navbar-item', { 'is-active': isTabs })}>
              <Link to="/tabs">Tabs</Link>
            </div>
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
