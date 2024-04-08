import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Tabs } from './components/Tabs';
import cn from 'classnames';

const getLinkClassname = ({ isActive }: { isActive: boolean }) =>
  cn('navbar-item', { 'is-active': isActive });

export const App = () => (
  <>
    <html className="has-navbar-fixed-top" />
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={getLinkClassname}>
            Home
          </NavLink>
          <NavLink to="/tabs" className={getLinkClassname}>
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
        <Route path=":tabId" element={<Tabs />} />
      </Route>
      <Route path="*" element={<h1 className="title">Page not found</h1>} />
    </Routes>

    <div className="section">
      <div className="container"></div>
    </div>
  </>
);
