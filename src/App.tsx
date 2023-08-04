import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Navigate, NavLink, Route, Routes,
} from 'react-router-dom';
import classNames from 'classnames';
import { FC } from 'react';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './components/TabsPage';
import { NotFoundPage } from './pages/NotFoundPage';

const navLinkIsActive = ({ isActive }: { isActive: boolean }) => (
  classNames(
    'navbar-item', {
      'is-active': isActive,
      'has-navbar-fixed-top': isActive,
    },
  ));

export const App :FC = () => (
  <>
    <nav
      className="
       navbar
       is-light
       is-fixed-top
       is-mobile
       has-shadow
       "
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={navLinkIsActive}>Home</NavLink>
          <NavLink to="/tabs" className={navLinkIsActive}>Tabs</NavLink>
        </div>
      </div>
    </nav>
    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="tabs">
            <Route path=":tabId?" element={<TabsPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  </>
);
