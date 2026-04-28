import { Link, useLocation } from 'react-router-dom';

export const Nav = () => {
  const { pathname } = useLocation();

  return (
    <nav className="navbar is-light is-fixed-top" data-cy="Nav">
      <div className="navbar-brand">
        <Link
          to="/"
          className={pathname === '/' ? 'navbar-item is-active' : 'navbar-item'}
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
    </nav>
  );
};
