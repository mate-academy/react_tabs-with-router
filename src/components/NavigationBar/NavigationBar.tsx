import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';

export const NavigationBar = () => {
  const [activePage, setActivePage] = useState<string>('Home');
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      setActivePage('Home');

      return;
    }

    if (pathname === '/tabs' || pathname.startsWith('/tabs/')) {
      setActivePage('Tabs');

      return;
    }

    setActivePage('');
  }, [pathname]);

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link
            to="/"
            className={cn('navbar-item', {
              'is-active': activePage === 'Home',
            })}
          >
            Home
          </Link>
          <Link
            to="/tabs"
            className={cn('navbar-item', {
              'is-active': activePage === 'Tabs',
            })}
          >
            Tabs
          </Link>
        </div>
      </div>
    </nav>
  );
};
