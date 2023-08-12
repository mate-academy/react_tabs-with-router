import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import React from 'react';
import {
  Outlet,
  NavLink,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import classNames from 'classnames';

export const App = () => {
  const handleClassName = ({ isActive }: { isActive: boolean }) => {
    return classNames('navbar-item', { 'is-active': isActive });
  };

  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (location.pathname === '/home') {
      navigate('/');
    }
  }, [location.pathname]);

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={handleClassName}>
              Home
            </NavLink>

            <NavLink to="/tabs" className={handleClassName}>
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
