import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Routes, Route, NavLink, Navigate,
} from 'react-router-dom';
import classNames from 'classnames';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';

export const App = () => {
  const getClass = ({ isActive }: { isActive: boolean }) => {
    return classNames('navbar-item', {
      'is-active': isActive,
    });
  };

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
              className={getClass}
            >
              Home
            </NavLink>

            <NavLink
              to="/tabs"
              className={getClass}
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
              <Route index element={<TabsPage />} />
              <Route path=":tabId" element={<TabsPage />} />
            </Route>

            <Route path="/home" element={<Navigate to="/" />} />

            <Route
              path="*"
              element={
                <h1 className="title">Page not found</h1>
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
};
