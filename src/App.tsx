import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  NavLink, Navigate, Route, Routes,
} from 'react-router-dom';
import classNames from 'classnames';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';

const getLinkClass = ({ isActive }: { isActive: boolean }) => (
  classNames('navbar-item', {
    'is-active': isActive,
  }));

export const App = () => (
  <>
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow
        has-navbar-fixed-top"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            to="/"
            className={getLinkClass}
          >
            Home
          </NavLink>

          <NavLink
            to="/tabs"
            className={getLinkClass}
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" />} />

          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
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
