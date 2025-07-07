import { Link, useLocation } from 'react-router-dom';

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
            className={`navbar-item ${isHomePage ? 'is-active' : ''}`}
          >
            Home
          </Link>
        </div>
        <div className="navbar-brand">
          <Link
            to="/tabs"
            className={`navbar-item ${isTabs ? 'is-active' : ''}`}
          >
            Tabs
          </Link>
        </div>
      </div>
    </nav>
  );
};
