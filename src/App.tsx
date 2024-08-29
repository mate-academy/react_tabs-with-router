import { Route, Routes, Navigate } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { Tabs } from './components/Tabs';
import { NavPage } from './components/NavPage';

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <NavPage />
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<h1 className="title">Home page</h1>}
          ></Route>
          <Route path="/home" element={<Navigate to={'/'} />}></Route>
          <Route path="/tabs">
            <Route index element={<Tabs />} />
            <Route path=":tabId" element={<Tabs />} />
          </Route>
          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Routes>
      </div>
    </div>
  </>
);
