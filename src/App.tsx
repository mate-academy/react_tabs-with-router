import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Route, Routes, NavLink, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Tabs from './components/Tabs';
import NotFoundPage from './components/NotFoundPage';
import classNames from 'classnames';

const isActiveLink = ({ isActive }: { isActive: boolean }) => {
  return classNames('navbar-item', { 'is-active': isActive });
};

export const App = () => {
  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={isActiveLink}>
              Home
            </NavLink>
            <NavLink to="/tabs" className={isActiveLink}>
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Navigate to="/" />} />

        <Route path="tabs">
          <Route index element={<Tabs />} />
          <Route path=":tabsId" element={<Tabs />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
