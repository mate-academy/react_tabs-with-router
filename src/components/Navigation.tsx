import cn from 'classnames';
import { Link, matchPath, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const { pathname } = useLocation();

  const isNavActive =
    matchPath({ path: '/tabs', end: true }, pathname) ||
    matchPath({ path: '/tabs/:tabId', end: true }, pathname);

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link
            to="/"
            className={cn('navbar-item', { 'is-active': pathname === '/' })}
          >
            Home
          </Link>
          <Link
            to="tabs"
            className={cn('navbar-item', { 'is-active': isNavActive })}
          >
            Tabs
          </Link>
        </div>
      </div>
    </nav>
  );
};
