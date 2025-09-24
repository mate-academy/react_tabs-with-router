import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Link, Outlet, useLocation } from 'react-router-dom';
import classNames from 'classnames';

export const App = () => {
  const location = useLocation();

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <div
              className={classNames('navbar-item', {
                'is-active': location.pathname === '/',
              })}
            >
              <Link to="/">Home</Link>
            </div>
            <div
              className={classNames('navbar-item', {
                'is-active': location.pathname.startsWith('/tabs'),
              })}
            >
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
