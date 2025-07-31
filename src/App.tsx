import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Link, Outlet, useLocation } from 'react-router-dom';
import classNames from 'classnames';

export const App = () => {
  const location = useLocation();

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <ul className="navbar-menu is-flex">
              <li
                className={classNames({ 'is-active': location.pathname === '/' })}
              >
                <Link to="/" className="navbar-item">Home</Link>
              </li>

              <li
                className={classNames({
                  'is-active': location.pathname.startsWith('/tabs'),
                })}
              >
                <Link to="/tabs" className="navbar-item">Tabs</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="section">
        <Outlet />
      </div>
    </>
  );
};
