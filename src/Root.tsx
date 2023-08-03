import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import TabsPage from './pages/TabsPage';
import PageNotFound from './pages/PageNotFound';
import { App } from './App';

export const Root: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />

        <Route path="tabs">
          <Route path=":tabId?" element={<TabsPage />} />
        </Route>

        <Route path="home" element={<Navigate to="/" />} />

        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </Router>
);
