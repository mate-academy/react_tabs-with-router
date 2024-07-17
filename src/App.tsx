import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { NavLink } from 'react-router-dom';
import './App.scss';
import classNames from 'classnames';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Home } from './Home';
import { Tabs } from './Tabs';
import { useEffect } from 'react';

export const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/home') {
      return navigate('/');
    }
  }, []);

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              to="/"
              className={({ isActive }) =>
                classNames('navbar-item', { 'is-active': isActive })
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={({ isActive }) =>
                classNames('navbar-item', { 'is-active': isActive })
              }
            >
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="tabs" element={<Tabs />}>
              <Route path=":tabId?"></Route>
            </Route>

            <Route
              path="*"
              element={<h1 className="title">Page not found</h1>}
            />
          </Routes>
        </div>
      </div>
    </>
  );
};
