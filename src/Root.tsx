import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { App } from './App';
import { TabsPage } from './components/TabsPage';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Navigate to="/" replace />} />

        <Route index element={<h1 className="title">Home page</h1>} />

        <Route path="tabs" element={<TabsPage />}>
          <Route path=":tabId" />
        </Route>

        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </Router>
);
