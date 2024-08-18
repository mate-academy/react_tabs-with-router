import { useEffect, useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Link, Outlet, useLocation } from 'react-router-dom';
import classNames from 'classnames';

export const App = () => {
  const [title, setTitle] = useState('Home page');
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;

    if (pathname === '/') {
      setTitle('Home page');
    } else if (pathname.startsWith('/tabs')) {
      setTitle('Tabs page');
    } else {
      setTitle('Page not found');
    }
  }, [location.pathname]);

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
              className={classNames(
                'navbar-item',
                title === 'Home page' ? 'is-active' : '',
              )}
            >
              Home
            </Link>
            <Link
              to="/tabs"
              className={classNames(
                'navbar-item',
                title === 'Tabs page' ? 'is-active' : '',
              )}
            >
              Tabs
            </Link>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <h1 className="title">{title}</h1>
          <Outlet />
        </div>
      </div>
    </>
  );
};
