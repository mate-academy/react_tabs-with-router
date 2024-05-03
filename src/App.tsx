import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import classNames from 'classnames';

export const App = () => {
  const [isTabsActive, setIsTabsActive] = useState(false);

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link
              to="/"
              onClick={() => setIsTabsActive(false)}
              className={classNames('navbar-item', {
                'is-active': !isTabsActive,
              })}
            >
              Home
            </Link>
            <Link
              to="/tabs"
              onClick={() => setIsTabsActive(true)}
              className={classNames('navbar-item', {
                'is-active': isTabsActive,
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
