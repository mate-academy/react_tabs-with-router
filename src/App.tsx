import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import cn from 'classnames';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { HomePage } from './HomePage';
import { Tabs } from './Tabs';
import { ErrorPage } from './ErrorPage';

const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn('navbar-item', { 'is-active': isActive });

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
            <Route path="/" element={<HomePage />}></Route>
            <Route path="home" element={<Navigate to="/" />} />
            <Route path="tabs">
              <Route path=":tabId?" element={<Tabs />} />
            </Route>
            <Route path="*" element={<ErrorPage />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
};
