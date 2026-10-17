import { Link, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link
            to="/"
            className={
              pathname === '/'
                ? 'navbar-item is-active'
                : 'navbar-item'
            }
          >
            Home
          </Link>

          <Link
            to="/tabs"
            className={
              pathname.startsWith('/tabs')
                ? 'navbar-item is-active'
                : 'navbar-item'
            }
          >
            Tabs
          </Link>
        </div>
      </div>
    </nav>
  );
};
