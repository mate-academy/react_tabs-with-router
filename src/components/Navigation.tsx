import { Link, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const location = useLocation();

  const isHomeActive = location.pathname === '/';
  const isTabsActive = location.pathname.startsWith('/tabs');

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <div className={`navbar-item ${isHomeActive ? 'is-active' : ''}`}>
            <Link to="/">Home</Link>
          </div>

          <div className={`navbar-item ${isTabsActive ? 'is-active' : ''}`}>
            <Link to="/tabs">Tabs</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
