import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { App } from './App';
import HomePage from './components/home/home.component';
import NotFound from './components/not-found-page/not.found.component';
import TabsPage from './components/tabs-page/tabs.page.component';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" />} />

        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </HashRouter>
);
