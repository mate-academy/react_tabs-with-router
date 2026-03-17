import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="navbar is-light is-mobile has-shadow" data-cy="Nav">
      <div className="container">
        <div className="navbar-brand">
          <Link
            to="/"
            className={`navbar-item ${location.pathname === '/' ? 'is-active' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/tabs"
            className={`navbar-item ${location.pathname.startsWith('/tabs') ? 'is-active' : ''}`}
          >
            Tabs
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
