import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

import {
  Route, Routes, NavLink, Navigate,
} from 'react-router-dom';

import { TabsPage } from './elements/TabsPage';

const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav className="navbar is-fixed-top has-background-light" data-cy="nav">
      <div className="navbar-menu">
        <div className="navbar-start">
          <NavLink
            to="/"
            className="navbar-item isActive"
          >
            Home
          </NavLink>
          <NavLink
            to="/tabs"
            className="navbar-item isActive"
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>

    <Routes>
      <Route
        path="/"
        element={<p className="title">Home Page</p>}
      />
      <Route
        path="/tabs/*"
        element={<TabsPage />}
      />
      <Route
        path="/home"
        element={<Navigate to="/" />}
      />
    </Routes>
  </>
);

export default App;
