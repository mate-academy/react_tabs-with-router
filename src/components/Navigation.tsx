import { Link, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const { pathname } = useLocation();

  const isHomeActive = pathname === '/';
  const isTabsActive = pathname.startsWith('/tabs');

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <ul className="navbar-menu">
            <li className={isHomeActive ? 'is-active' : ''}>
              <Link
                to="/"
                className={`navbar-item ${isHomeActive ? 'is-active' : ''}`}
              >
                Home
              </Link>
            </li>

            <li className={isTabsActive ? 'is-active' : ''}>
              <Link
                to="/tabs"
                className={`navbar-item ${isTabsActive ? 'is-active' : ''}`}
              >
                Tabs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
