import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';
import classNames from 'classnames';

export const App = () => {
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    classNames('navbar-item', { 'is-active': isActive });

  return (
    <>
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

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route
          path="*"
          element={<h1 className="title">Page not found</h1>}
        ></Route>
      </Routes>
    </>
  );
};
