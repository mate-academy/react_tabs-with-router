import { HashRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { TabsPage } from './pages/TabsPage';

export const Root = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="*" element={<NotFoundPage />} />
          <Route index element={<HomePage />} />
          <Route path="tabs" element={<TabsPage />}>
            <Route path=":tabId" element={<TabsPage />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
};
