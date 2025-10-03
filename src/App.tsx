import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Link, useLocation, matchPath } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export const App = () => {
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home', match: '/' },
    { to: '/tabs', label: 'Tabs', match: '/tabs/*' },
  ];

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            {navLinks.map(link => {
              const isActive = !!matchPath(link.match, location.pathname);

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`navbar-item${isActive ? ' is-active' : ''}`}
                >
                  {link.label}
                </Link>
              );
            })}
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
