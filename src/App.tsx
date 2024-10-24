import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './pages/NotFoundPage';
import { TabsPage } from './pages/TabsPage';
import { HomePage } from './pages/HomePage';
import cn from 'classnames';

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
            className={({ isActive }) => {
              return cn('navbar-item', { 'is-active': isActive });
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/tabs"
            className={({ isActive }) => {
              return cn('navbar-item', { 'is-active': isActive });
            }}
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/">
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/home" element={<Navigate to="/" replace={true} />} />
            <Route index element={<HomePage />} />
            <Route path="tabs">
              <Route path=":tabsId?" element={<TabsPage />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </div>
  </>
);
