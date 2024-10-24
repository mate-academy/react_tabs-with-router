import React from 'react';
import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from 'react-router-dom';

import { Home } from './components/Home';
import { Tabs } from './components/Tabs';
import { Page404 } from './components/Page404/Page404';
import { App } from './App';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Navigate to=".." />} />
        <Route path="/tabs">
          <Route index element={<Tabs />} />
          <Route path=":tabsId?" element={<Tabs />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  </Router>
);
