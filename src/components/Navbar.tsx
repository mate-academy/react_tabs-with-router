import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { pathname } = useLocation();

  const isActive = (to: string) => {
    if (to === '/') {
      return pathname === '/';
    }

    return pathname.startsWith(to);
  };

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link
            to="/"
            className={isActive('/') ? 'navbar-item is-active' : 'navbar-item'}
            data-cy="NavHome"
          >
            Home
          </Link>

          <Link
            to="/tabs"
            className={
              isActive('/tabs') ? 'navbar-item is-active' : 'navbar-item'
            }
            data-cy="NavTabs"
          >
            Tabs
          </Link>
        </div>
      </div>
    </nav>
  );
}
