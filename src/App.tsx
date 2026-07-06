import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Routes, Link, Route, Navigate, useLocation } from 'react-router-dom';
import { HomePage } from './components/home';
import { TabsPage } from './components/TabsPage';

export const App = () => {
  const { pathname } = useLocation();

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
              to="/"
              className={
                pathname === '/' ? 'navbar-item is-active' : 'navbar-item'
              }
            >
              Home
            </Link>
            <Link
              to="/tabs"
              className={
                pathname.startsWith('/tabs')
                  ? 'navbar-item is-active'
                  : 'navbar-item'
              }
            >
              Tabs
            </Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/" element={<HomePage />} />
        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>

        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Routes>
    </>
  );
};
