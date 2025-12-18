import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { Home } from './components/Home';
import { NotFound } from './components/NotFound';
import { TabsPage } from './components/TabsPage';

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
            to="tabs"
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
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>

          <Route path="home" element={<Navigate to="/" replace />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  </>
);
