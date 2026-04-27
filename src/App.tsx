import { Routes, Route, Navigate } from 'react-router-dom';

import { Nav } from './components/Nav/Nav';
import { Home } from './components/Home/Home';
import { TabsPage } from './components/Tabs/TabsPage';

export const App = () => (
  <>
    <Nav />

    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/home" element={<Navigate to="/" replace />} />

      <Route path="tabs">
        <Route index element={<TabsPage />} />
        <Route path=":tabId" element={<TabsPage />} />
      </Route>

      <Route path="*" element={<h1 className="title">Page not found</h1>} />
    </Routes>
  </>
);
