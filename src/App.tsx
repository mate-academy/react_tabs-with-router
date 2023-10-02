import {
  Link, Route, Routes, Navigate, useNavigate,
} from 'react-router-dom';
import cn from 'classnames';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { useEffect, useState } from 'react';
import { TabPage } from './pages/TabPage';

export const App = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState('home');

  useEffect(() => {
    const currentPath = window.location.hash;

    if (currentPath === '#/') {
      setActive('home');
    } else if (currentPath.startsWith('#/tabs')) {
      setActive('tabs');
    }
  }, [navigate]);

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link
              to="/home"
              className={cn('navbar-item', {
                'is-active': active === 'home',
              })}
            >
              Home
            </Link>
            <Link
              to="/tabs"
              className={cn('navbar-item', {
                'is-active': active === 'tabs',
              })}
            >
              Tabs
            </Link>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="">
              <Route index element={<h1 className="title">Home page</h1>} />
              <Route
                path="/home"
                element={(
                  <>
                    <h1 className="title">
                      Home page
                    </h1>
                    <Navigate to="/" />
                  </>
                )}
              />
              <Route
                path="tabs/*"
                element={(
                  <>
                    <TabPage />
                  </>
                )}
              />
              <Route
                path="tabs/:tabId"
                element={<TabPage />}
              />
              <Route
                path="*"
                element={<h1 className="title">Page not found</h1>}
              />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
};
