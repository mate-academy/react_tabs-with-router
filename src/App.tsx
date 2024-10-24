import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import classNames from 'classnames';
import { TabsPage } from './components/TabsPage';
import { HomePage } from './components/HomePage';
import { PageNotFound } from './components/PageNotFound';

export const App = () => {
  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              to="/"
              end
              className={({ isActive }) => {
                return classNames('navbar-item', { 'is-active': isActive });
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={({ isActive }) => {
                return classNames('navbar-item', { 'is-active': isActive });
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
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Navigate to="/" replace={true} />} />
            <Route path="/tabs" element={<TabsPage />}>
              <Route path=":tabId" element={<TabsPage />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
