import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import classNames from 'classnames';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { Page404 } from './components/Page404';
import { TabsPage } from './components/TabsPage';

export const App = () => {
  function getNavLinkClass({ isActive }: { isActive: boolean }) {
    return classNames('navbar-item', {
      'is-active': isActive,
    });
  }

  return (
    <>
      {}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" end className={getNavLinkClass}>
              Home
            </NavLink>
            <NavLink to="tabs" className={getNavLinkClass}>
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="tabs">
              <Route index element={<TabsPage />} />
              <Route path=":tabId" element={<TabsPage />} />
            </Route>
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
