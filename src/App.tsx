import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { HomePage } from './page/HomePage';
import { TabsPage } from './page/TabsPage';

export const App = () => (
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
              isActive ? 'navbar-item is-active' : 'navbar-item'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/tabs"
            className={({ isActive }) =>
              isActive ? 'navbar-item is-active' : 'navbar-item'
            }
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>

    <div className="section">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId?" element={<TabsPage />} />
        </Route>

        <Route
          path="*"
          element={
            <div className="container">
              <h1 className="title">Page not found</h1>
            </div>
          }
        />
      </Routes>
    </div>
  </>
);
