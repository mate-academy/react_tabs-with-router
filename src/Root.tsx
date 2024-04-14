import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { App } from './App';
import PageNotFound from './pages/PageNotFound';
import TabsPage from './pages/TabsPage';
import HomePage from './pages/HomePage';

const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Navigate to="/" />} />
        <Route index element={<HomePage />} />

        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </HashRouter>
);

export default Root;
