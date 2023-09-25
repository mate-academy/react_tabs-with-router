// App.tsx
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@babel/plugin-proposal-private-property-in-object';
import './App.scss';
import React, { useState } from 'react';
import {
  HashRouter, Route, Navigate,
} from 'react-router-dom';
import { Tabs } from './components/Tabs';
import { Tab } from './types/Tab';

const tabs:Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [activePage, setActivePage] = useState('home');

  return (
    <HashRouter>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <a
              href="/"
              className={`navbar-item ${activePage === 'home' ? 'is-active' : ''}`}
              onClick={() => setActivePage('home')}
            >
              Home
            </a>
            <a
              href="/tabs"
              className={`navbar-item ${activePage === 'tabs' ? 'is-active' : ''}`}
              onClick={() => setActivePage('tabs')}
            >
              Tabs
            </a>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<h1 className="title">Home page</h1>} />

          <Route
            path="/tabs"
            // eslint-disable-next-line max-len
            element={<Tabs tabs={tabs} activeTab={activePage} setActiveTab={setActivePage} />}
          />

          <Route
            path="/tabs/:tabId"
            // eslint-disable-next-line max-len
            element={<Tabs tabs={tabs} activeTab={activePage} setActiveTab={setActivePage} />}
          />

          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </div>
      </div>
    </HashRouter>
  );
};
