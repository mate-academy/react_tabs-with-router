import { Route, HashRouter, Routes, Navigate } from 'react-router-dom';
import { App } from './App';
import { PageNotFound } from './Components/PageNotFound';
import { TabsProvider } from './Components/TabsContext';
import { HomePage } from './Components/HomePage';
import { TabsPage } from './Components/TabsPage';

export const Root = () => (
  <HashRouter>
    <TabsProvider>
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
    </TabsProvider>
  </HashRouter>
);
