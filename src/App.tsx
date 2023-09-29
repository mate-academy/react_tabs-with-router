/* eslint-disable max-len */
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import React, { useState } from 'react';
import {
  HashRouter, Route, Navigate, Link, useParams,
} from 'react-router-dom';
import { Tabs } from './components/Tabs';
import { Tab } from './types/Tab';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const { tabId } = useParams<{ tabId?: string }>();
  const [activePage, setActivePage] = useState('home');

  return (
    <HashRouter>
      <nav className="navbar is-light is-fixed-top is-mobile has-shadow" data-cy="Nav">
        <div className="container">
          <div className="navbar-brand">
            <Link
              to="/"
              className={`navbar-item ${activePage === 'home' ? 'is-active' : ''}`}
              onClick={() => setActivePage('home')}
            >
              Home
            </Link>
            <Link
              to="/tabs"
              className={`navbar-item ${activePage === 'tabs' ? 'is-active' : ''}`}
              onClick={() => setActivePage('tabs')}
            >
              Tabs
            </Link>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<h1 className="title">Home page</h1>} />

          <Route
            path="/tabs"
            element={<Tabs tabs={tabs} activeTab={tabId || tabs[0].id} setActiveTab={setActivePage} />}
          />

          <Route
            path="/tabs/:tabId"
            element={<Tabs tabs={tabs} activeTab={tabId || tabs[0].id} setActiveTab={setActivePage} />}
          />

          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </div>
      </div>
    </HashRouter>
  );
};
