import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Link, Outlet, useLocation } from 'react-router-dom';

export const App = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <ul className="navbar-start">
            <li
              className={`navbar-item ${currentPath === '/' ? 'is-active' : ''}`}
            >
              <Link to="/">Home</Link>
            </li>

            <li
              className={`navbar-item ${currentPath.startsWith('/tabs') ? 'is-active' : ''}`}
            >
              <Link to="/tabs">Tabs</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
