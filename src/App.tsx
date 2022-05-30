import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import { HomePage } from './components/HomePage';
import { TabPage } from './components/TabPage';

import './App.scss';
import 'bulma';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => (
  <div className="App">
    <header>
      <nav className="nav">
        <Link
          to="/"
          className="nav__item"
        >
          Home
        </Link>
        <Link
          to="/tabs"
          className="nav__item"
        >
          Tabs
        </Link>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tabs" element={<TabPage tabs={tabs} />} />
      <Route path="/tabs/:tabId" element={<TabPage tabs={tabs} />} />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>

  </div>
);

export default App;
