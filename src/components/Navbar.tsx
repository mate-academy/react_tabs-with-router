import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
// import React from 'react';

export const Navbar: React.FC = React.memo(
  () => {
    const activePath = useLocation();
    const [isWrongPath, setIsWrongPath] = useState(false);

    useEffect(() => {
      if (activePath.pathname === '/'
        || activePath.pathname.includes('/tabs')) {
        setIsWrongPath(false);
      } else {
        setIsWrongPath(true);
      }
    }, [activePath.pathname]);

    return (
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link
              to="/"
              className={classNames('navbar-item', {
                'is-active': activePath.pathname === '/' && !isWrongPath,
              })}
            >
              Home
            </Link>
            <Link
              to="/tabs"
              className={classNames('navbar-item', {
                'is-active': (
                  activePath.pathname.includes('/tabs')
                ) && !isWrongPath,
              })}
            >
              Tabs
            </Link>
          </div>
        </div>
      </nav>
    );
  },
);
