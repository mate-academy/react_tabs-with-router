import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';

import 'bulma';

import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="tabs" element={<TabsPage />}>
            <Route path=":tabId" element={<p>Page Outlet</p>} />
          </Route>
          <Route path="*" element={<h1>Error</h1>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
