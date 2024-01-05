/* eslint-disable import/no-cycle */
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { TabsPage } from './components/TabsPage/TabsPage';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  return (
    <div className="app">
      <nav className="nav" data-cy="Nav">
        <ul className="nav__list">
          <li className="is-active">
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/tabs">Tabs</a>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/home" element={<Navigate to="/" />} />
        <Route
          path="/"
          element={(
            <div className="section">
              <h1 className="title">Home page</h1>
            </div>
          )}
        />
        <Route path="/tabs" element={<TabsPage />} />
        <Route
          path="*"
          element={<h1 className="title">Page not found</h1>}
        />
      </Routes>
    </div>
  );
};
