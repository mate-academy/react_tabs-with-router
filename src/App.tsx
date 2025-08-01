import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { NavLink, Route, Routes, Navigate } from 'react-router-dom';
import classNames from 'classnames';
import { HomePage } from './components/HomePage';
import { NotFoundPage } from './components/NotFoundPage';
import { Tabs } from './components/Tabs';

const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  classNames('navbar-item', {
    'is-active': isActive,
  });

export const App = () => (
  <>
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={getNavLinkClass}>
            Home
          </NavLink>
          <NavLink to="/tabs" className={getNavLinkClass}>
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
          <Route path="/tabs">
            <Route index element={<Tabs />} />
            <Route path=":tabId" element={<Tabs />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  </>
);

