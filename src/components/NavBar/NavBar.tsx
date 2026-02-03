import { Link, useLocation } from 'react-router-dom';

export const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="navbar is-light is-fixed-top" data-cy="Nav">
      <div className="navbar-brand">
        <Link
          to="/"
          className={`navbar-item ${pathname === '/' ? 'is-active' : ''}`}
        >
          Home
        </Link>

        <Link
          to="/tabs"
          className={`navbar-item ${
            pathname.startsWith('/tabs') ? 'is-active' : ''
          }`}
        >
          Tabs
        </Link>
      </div>
    </nav>
  );
};
