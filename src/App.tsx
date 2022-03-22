import React from 'react';
import {
  Routes, Route, NavLink, Navigate,
} from 'react-router-dom';
import classNames from 'classnames';

import TabPage from './components/TabPage';

import './App.scss';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => (
  <div className="App">
    <header>
      <nav className="nav">
        <NavLink
          to="/"
          className={({ isActive }) => classNames(
            'nav__link',
            { 'nav__link--active': isActive },
          )}
        >
          Home
        </NavLink>

        <NavLink
          to="/tabs"
          className={({ isActive }) => classNames(
            'nav__link',
            { 'nav__link--active': isActive },
          )}
        >
          Tabs
        </NavLink>
      </nav>
    </header>

    <main className="main">
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="tabs/" element={<TabPage tabs={tabs} />} />
        <Route path="tabs/:tabId" element={<TabPage tabs={tabs} />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </main>
  </div>
);

export default App;
