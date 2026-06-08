import { Link, Outlet, useLocation } from 'react-router-dom';

export const Layout = () => {
  const location = useLocation();

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
              className={`navbar-item ${
                location.pathname === '/' ? 'is-active' : ''
              }`}
            >
              Home
            </Link>
            {/* <a href="/" className="navbar-item is-active">
              Home
            </a> */}
            <Link
              to="/tabs"
              className={`navbar-item ${
                location.pathname.startsWith('/tabs') ? 'is-active' : ''
              }`}
            >
              Tabs
            </Link>
            {/* <a href="/tabs" className="navbar-item">
              Tabs
            </a> */}
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
