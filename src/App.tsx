import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.scss';
import { Home } from './components/Home';
import { Navigation } from './components/Navigation';
import { TabPage } from './components/TabPage';

const App: React.FC = () => (
  <div className="App">
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tabs/*" element={<TabPage />} />
    </Routes>
  </div>
);

export default App;
