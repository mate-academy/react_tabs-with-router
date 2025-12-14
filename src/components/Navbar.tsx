import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

export const Navbar = () => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const isTabs = pathname.startsWith('/tabs');

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link
            to="/"
            className={classNames('navbar-item', { 'is-active': isHome })}
          >
            Home
          </Link>
          <Link
            to="/tabs"
            className={classNames('navbar-item', { 'is-active': isTabs })}
          >
            Tabs
          </Link>
        </div>
      </div>
    </nav>
  );
};
