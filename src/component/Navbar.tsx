import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

export const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isTabs = location.pathname.startsWith('/tabs');

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link
            to="/"
            className={classNames('navbar-item', { 'is-active': isHomePage })} // Using classnames here
          >
            Home
          </Link>
        </div>
        <div className="navbar-brand">
          <Link
            to="/tabs"
            className={classNames('navbar-item', { 'is-active': isTabs })} // Using classnames here
          >
            Tabs
          </Link>
        </div>
      </div>
    </nav>
  );
};
