import cn from 'classnames';
import { Link, useLocation } from 'react-router-dom';

export const AppNav = () => {
  const { pathname } = useLocation();

  return (
    <nav className="navbar is-light" data-cy="Nav">
      <div className="container">
        <div className="navbar-brand">
          <Link
            to="/"
            className={cn('navbar-item', {
              'is-active': pathname === '/',
            })}
          >
            Home
          </Link>

          <Link
            to="/tabs"
            className={cn('navbar-item', {
              'is-active': pathname.startsWith('/tabs'),
            })}
          >
            Tabs
          </Link>
        </div>
      </div>
    </nav>
  );
};
