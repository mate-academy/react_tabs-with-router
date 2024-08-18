import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from 'react-router-dom';
import { TabsPage } from './pages/TabsPage';
import { App } from './App';
import { PageNotFound } from './pages/PageNotFound';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path="tab-:tabId" element={<TabsPage />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </Router>
);
