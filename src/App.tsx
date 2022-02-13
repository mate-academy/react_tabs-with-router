import React from 'react';
import {
  NavLink,
  Routes,
  Route,
} from 'react-router-dom';

import { TabsPage } from './components/TabsPage';
import { TabInfo } from './components/TabInfo';

import './App.scss';

const App: React.FC = () => (
  <div className="App">
    <nav className="navbar">
      <NavLink
        to="/"
        end
        className={({ isActive }) => `${isActive ? 'is-active ' : ''} navbar-item is-tab`}
      >
        Home
      </NavLink>

      <NavLink
        to="/tabs"
        className={({ isActive }) => `${isActive ? 'is-active ' : ''} navbar-item is-tab`}
      >
        Tabs
      </NavLink>
    </nav>

    <Routes>
      <Route
        path="/"
        element={
          <h2 className="title is-2">Home page</h2>
        }
      />

      <Route
        path="tabs"
        element={<TabsPage />}
      >
        <Route path=":tabId" element={<TabInfo />} />
      </Route>

      <Route
        path="*"
        element={
          <h2 className="title is-2">Page not found</h2>
        }
      />
    </Routes>
  </div>
);

export default App;
