import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { HomePage } from './HomePage';
import { TabsPage } from './TabsPage';

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="tabs/*" element={<TabsPage />} />
      </Route>
    </Routes>
  </HashRouter>,
  document.getElementById('root'),
);
