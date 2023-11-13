// import { useEffect } from 'react';
import {
  Outlet,
  NavLink,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useEffect } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import cn from 'classnames';

export const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (window.location.hash === '#/home') {
      navigate('/');
    }
  }, [navigate]);

  return (
    <html lang="en" className="has-navbar-fixed-top">
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              to="/"
              className={cn('navbar-item', {
                'is-active': location
                  .pathname.endsWith('/'),
              })}
            >
              Home
            </NavLink>

            <NavLink
              to="/tabs"
              className={
                ({ isActive }) => cn('navbar-item', { 'is-active': isActive })
              }
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
    </html>
  );
};
