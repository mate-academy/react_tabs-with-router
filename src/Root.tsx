import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { HomePage } from './Components/HomePage/HomePage';
import { TabsPage } from './Components/TabsPage/TabsPage';
import { NotFoundPage } from './Components/NotFoundPage/NotFoundPage';
import { App } from './App';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />

        <Route path="home" element={<Navigate to="/" replace />} />

        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId?" element={<TabsPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Router>
);
