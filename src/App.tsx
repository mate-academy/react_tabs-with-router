import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { NavLink, Navigate, Route, Routes } from 'react-router-dom';

import Error from './components/Error';
import Home from './components/Home';
import Tabs from './components/Tabs';

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            to="/"
            className={({ isActive }) =>
              ' navbar-item ' + (isActive ? 'is-active' : '')
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/tabs"
            className={({ isActive }) =>
              ' navbar-item ' + (isActive ? 'is-active' : '')
            }
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="home" element={<Navigate to={'/'} />} />
          <Route path="tabs">
            <Route index element={<Tabs />} />
            <Route path=":tabId" element={<Tabs />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  </>
);
