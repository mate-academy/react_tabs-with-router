import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { App } from '../App';
import { Home } from '../components/Home';
import { HashRouter } from 'react-router-dom';
import { Tabs } from '../components/Tabs';

export const Root: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Navigate to="/" />} />
          <Route path="tabs">
            <Route index element={<Tabs />} />
            <Route path=":tabId?" element={<Tabs />} />
          </Route>
          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
