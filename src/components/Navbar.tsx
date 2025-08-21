import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const { pathname } = useLocation();

  const isHome = pathname === '/' || pathname === '/home'; // вдруг где-то попадается /home до редиректа
  const isTabs = pathname === '/tabs' || pathname.startsWith('/tabs/');

  return (
    <nav className="navbar is-light is-fixed-top has-shadow" data-cy="Nav">
      <div className="container">
        <div className="navbar-brand">
          <div className={`navbar-item${isHome ? ' is-active' : ''}`}>
            <Link to="/" className={isHome ? 'is-active' : ''}>
              Home
            </Link>
          </div>

          <div className={`navbar-item${isTabs ? ' is-active' : ''}`}>
            <Link to="/tabs" className={isTabs ? 'is-active' : ''}>
              Tabs
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
