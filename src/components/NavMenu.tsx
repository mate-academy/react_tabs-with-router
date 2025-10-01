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
          <div className={location.pathname === '/' ? 'is-active' : ''}>
            <Link to="/" className="navbar-item">
              Home
            </Link>
          </div>
          <div
            className={location.pathname.startsWith('/tabs') ? 'is-active' : ''}
          >
            <Link to="/tabs" className="navbar-item">
              Tabs
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
