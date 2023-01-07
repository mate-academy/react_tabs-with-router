import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Link,
  Route,
  Routes,
  Navigate,
  NavLink,
} from 'react-router-dom';
import classNames from 'classnames';
import { TabPage } from './pages/TabPage';

export const App = () => (
  <>
    <nav
      className="navbar is-light is-fixed-top"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link
            to="/"
            className="navbar-item"
          >
            Home
          </Link>

          <NavLink
            to="tabs"
            className={({ isActive }) => classNames(
              'navbar-item', { 'is-active': isActive },
            )}
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="*" element={<h1 className="title">Page not found</h1>} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="/" element={<h1 className="title">Home page</h1>} />
          <Route path="tabs">
            <Route index element={<TabPage />} />
            <Route path=":tabId" element={<TabPage />} />
          </Route>
        </Routes>
      </div>
    </div>
  </>
);
