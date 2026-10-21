import cn from 'classnames';
import { Link, Outlet, useLocation } from 'react-router-dom';

export const HomeLayout: React.FC = () => {
  const { pathname } = useLocation();

  function isActive(path: string) {
    return (
      pathname === path || (path !== '/' && pathname.startsWith(`${path}/`))
    );
  }

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
              className={cn('navbar-item', {
                'is-active': isActive('/'),
              })}
            >
              Home
            </Link>
            <Link
              to="/tabs"
              className={cn('navbar-item', {
                'is-active': isActive('/tabs'),
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
