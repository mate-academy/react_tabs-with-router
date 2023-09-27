// import React from 'react';
import ReactDOM from 'react-dom';
import {
  Routes,
  Route,
  HashRouter,
  Navigate,
} from 'react-router-dom';
import { App } from './App';
import { HomePage } from './components/Home';
import { TabsPage } from './components/Tabs';

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="tabs/:tabId?" element={<TabsPage />} />
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </HashRouter>,
  document.getElementById('root'),
);
