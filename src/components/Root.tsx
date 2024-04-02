import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { App } from '../App';
import { HomePage } from './HomePage';
import { TabsPage } from './TabsPage';
import { NotFoundPage } from './NotFoundPage';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" replace />} />

        <Route path="tabs">
          <Route path=":tabId?" element={<TabsPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Router>
);
