import { FC } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

import { TabsProvider } from './store/TabsContext';

import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';
import { ErrorPage } from './pages/ErrorPage';

import { App } from './App';

const Root: FC = () => {
  return (
    <HashRouter>
      <TabsProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="/home" element={<Navigate to="/" />} />

            <Route path="tabs">
              <Route path=":tabId?" element={<TabsPage />} />
            </Route>

            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </TabsProvider>
    </HashRouter>
  );
};

export default Root;
