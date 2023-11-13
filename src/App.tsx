import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import {
  Routes,
  Route,
  NavLink,
  Navigate,
} from 'react-router-dom';

import cn from 'classnames';

import { HomePage } from './components/HomePage/HomePage';
import { TabsPage } from './components/TabsPage/TabsPage';

export const App = () => {
  const isActiveClass = ({ isActive }: { isActive: boolean }) => cn(
    'navbar-item', { 'is-active': isActive },
  );

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
              className={isActiveClass}
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={isActiveClass}
            >
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tabs">
              <Route path=":tabId?" element={<TabsPage />} />
            </Route>
            <Route
              path="*"
              element={<h1 className="title">Page not found</h1>}
            />
            <Route path="/home" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
