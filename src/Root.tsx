import { HashRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';
import { NotFoundPage } from './components/NotFoundPage';

export const Root = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
