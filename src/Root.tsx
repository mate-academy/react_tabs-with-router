import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';
import { PageNotFound } from './components/PageNotFound';
import { TabProvider } from './components/TabContext/TabContext';

export const Root = () => (
  <HashRouter>
    <TabProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </TabProvider>
  </HashRouter>
);
