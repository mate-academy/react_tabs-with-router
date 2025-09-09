import { Link, useLocation } from 'react-router-dom';

export const NavMenu: React.FC = () => {
  const location = useLocation();

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <div>
            <a
              href="#/"
              className={`navbar-item${location.pathname === '/' ? ' is-active' : ''}`}
            >
              Home
            </a>
          </div>
          <div>
            <Link
              to="/tabs"
              className={`navbar-item${location.pathname.startsWith('/tabs') ? ' is-active' : ''}`}
            >
              Tabs
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
