import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import cn from 'classnames';

import { Home } from './pages/Home';
import { Tabs } from './pages/Tabs';
import { NotFound } from './pages/NotFound';

import './App.scss';

export const App = () => {
  const getClassName = ({ isActive }: { isActive: boolean }) =>
    cn('navbar-item', { 'is-active': isActive });

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={getClassName}>
              Home
            </NavLink>
            <NavLink to="/tabs" className={getClassName}>
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            <Route index element={<Home />} />
            <Route path="home" element={<Navigate to="/" replace />} />

            <Route path="tabs">
              <Route index element={<Tabs />} />

              <Route path=":tabId" element={<Tabs />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
