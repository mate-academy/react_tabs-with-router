import { HashRouter, Route, Routes } from 'react-router-dom';
import { App } from '../App';
import { HomePage } from '../pages/HomePage';
import { TabsPage } from '../pages/TabsPage';
import { NotFound } from '../pages/NotFound';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </HashRouter>
);
