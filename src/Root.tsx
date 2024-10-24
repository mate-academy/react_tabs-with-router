import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { TabsPage } from './components/TabsPage';
import { NotFound } from './components/NotFound';
import { HomePage } from './components/HomePage';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/:home?" element={<App />}>
        <Route index element={<HomePage />} />

        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </Router>
);
