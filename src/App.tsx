import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  NavLink,
  Navigate,
  Outlet,
  useParams,
} from 'react-router-dom';
import classNames from 'classnames';

export const App = () => {
  const { path } = useParams();

  if (path === 'home') {
    (<Navigate to="/" />);
  }

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              to="/"
              className={({ isActive }) => classNames(
                'navbar-item',
                { 'is-active': isActive },
              )}
            >
              Home
            </NavLink>

            <NavLink
              to="/tabs"
              className={({ isActive }) => classNames(
                'navbar-item',
                { 'is-active': isActive },
              )}
            >
              Tabs
            </NavLink>
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
