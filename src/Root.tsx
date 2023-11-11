import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from './App';

import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/:path?" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="tabs">
          <Route path=":tabId?" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </Router>
);
