import {
  Routes, Route, NavLink, Navigate,
} from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import classNames from 'classnames';
import { TabsPage } from './components/TabsPage';

const getLinkClass = ({ isActive }:
{ isActive: boolean }) => classNames('navbar-item', {
  'is-active': isActive,
});

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={getLinkClass}>
            Home
          </NavLink>
          <NavLink to="/tabs" className={getLinkClass}>
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Routes>
          <Route
            path="/"
            index
            element={<h1 className="title">Home page</h1>}
          />
          <Route path="home" element={<Navigate to="/" />} />
          <Route path="/tabs" element={<TabsPage />}>
            <Route
              index
              element={<h1 className="title">Please select a tab</h1>}
            />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>
          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Routes>
      </div>
    </div>
  </>
);
