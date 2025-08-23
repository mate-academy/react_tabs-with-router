import { createRoot } from 'react-dom/client';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';
import { PageNotFound } from './components/PageNotFound';
import { TabContent } from './components/TabContent';
import { TabsProvider } from './components/TabsContext/TabsContext';

createRoot(document.getElementById('root') as HTMLElement).render(
  <TabsProvider>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="tabs" element={<TabsPage />}>
            <Route index element={<TabContent />} />
            <Route path=":tabId" element={<TabContent />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  </TabsProvider>,
);
