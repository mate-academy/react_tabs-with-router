import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

export const NavBar: React.FC = () => {
  const { pathname } = useLocation();
  const isHomeActive = pathname === '/';
  const isTabsActive = pathname.startsWith('/tabs');

  return (
    <nav className="navbar is-light is-fixed-top" data-cy="Nav">
      <div className="container">
        <div className="navbar-brand">
          <div
            className={classNames('navbar-item', { 'is-active': isHomeActive })}
          >
            <Link to="/" className={classNames({ 'is-active': isHomeActive })}>
              Home
            </Link>
          </div>

          <div
            className={classNames('navbar-item', { 'is-active': isTabsActive })}
          >
            <Link
              to="/tabs"
              className={classNames({ 'is-active': isTabsActive })}
            >
              Tabs
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
