import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import classNames from 'classnames';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';

export const App = () => {
  const getLinkClass = ({ isActive }: { isActive: boolean }) => {
    return classNames('navbar-item', { 'is-active': isActive });
  };

  return (
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
        <div className="router-container">
          <Routes>
            <Route
              path="*"
              element={<h1 className="title">Page not found</h1>}
            />
            <Route path="/home" element={<Navigate to="/" replace={true} />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/tabs">
              <Route index element={<TabsPage />} />
              <Route path=":tabId" element={<TabsPage />} />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
};
