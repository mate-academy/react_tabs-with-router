// .. Navbar.tsx
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <div
            className={
              pathname === '/' ? 'navbar-item is-active' : 'navbar-item'
            }
          >
            <Link to="/">Home</Link>
          </div>

          <div
            className={
              pathname.startsWith('/tabs')
                ? 'navbar-item is-active'
                : 'navbar-item'
            }
          >
            <Link to="/tabs">Tabs</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
