import {
  Navigate,
  HashRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PageTabs } from './pages/PageTabs';
import { App } from './App';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" replace />} />

        <Route path="tabs" element={<PageTabs />}>
          <Route index element={<PageTabs />} />
          <Route path=":tabId?" element={<PageTabs />} />
        </Route>
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </Router>
);
