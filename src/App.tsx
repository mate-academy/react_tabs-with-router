import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import cn from 'classnames';
import { Link, Outlet, useLocation } from 'react-router-dom';

export const App = () => {
  const { pathname } = useLocation();

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <div className="navbar-item">
              <Link
                to="/"
                className={cn({
                  'is-active': pathname === '/',
                })}
              >
                Home
              </Link>
            </div>

            <div className="navbar-item">
              <Link
                to="/tabs"
                className={cn({
                  'is-active': pathname.startsWith('/tabs'),
                })}
              >
                Tabs
              </Link>
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
