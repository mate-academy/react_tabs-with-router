import { HashRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { ErrorPage } from './pages/Error/Error';
import { HomePage } from './pages/Home/HomePage';
import { TabsPage } from './pages/Tabs/TabsPage';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </HashRouter>
);
