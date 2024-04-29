import { createRoot } from 'react-dom/client';
import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from 'react-router-dom';
import { App } from './App';
import React from 'react';
import { GlobalProvider } from './reducer/Reducer';
import { HomePage } from './component/HomePage';
import { TabsPage } from './component/TabsPage';
import { PageNotFound } from './component/PageNotFound';
import { TabItem } from './component/TabItem';

createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <GlobalProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/home" element={<Navigate to="/" />} />
          <Route index element={<HomePage />} />

          <Route path="tabs" element={<TabsPage />}>
            <Route path=":tabId" element={<TabItem />}></Route>
            <Route path=":tabId" element={<TabItem />}></Route>
            <Route path=":tabId" element={<TabItem />}></Route>
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </GlobalProvider>
  </Router>,
);
