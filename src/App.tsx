import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import cn from 'classnames';

const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn('navbar-item', {
    'is-active': isActive,
  });

export const App = () => {
  useEffect(() => {
    document.documentElement.classList.add('has-navbar-fixed-top');

    return () => {
      document.documentElement.classList.remove('has-navbar-fixed-top');
    };
  }, []);

  const location = useLocation();

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link
              to="/"
              className={getLinkClass({ isActive: location.pathname === '/' })}
            >
              Home
            </Link>
            <Link
              to="/tabs"
              className={getLinkClass({
                isActive: location.pathname.startsWith('/tabs'),
              })}
            >
              Tabs
            </Link>
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
