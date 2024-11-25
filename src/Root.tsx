import { App } from './App';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';
import { TabsProvider } from './store/TabsContext';
import { Route, Routes, HashRouter, Navigate } from 'react-router-dom';

export const Root = () => {
  return (
    <HashRouter>
      <TabsProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="home" element={<Navigate to="/" />} />
            <Route path="tabs">
              <Route index element={<TabsPage />} />
              <Route path=":tabId" element={<TabsPage />} />
            </Route>
            <Route
              path="*"
              element={<h1 className="title">Page not found</h1>}
            />
          </Route>
        </Routes>
      </TabsProvider>
    </HashRouter>
  );
};
