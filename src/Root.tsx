import
{
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';
import { AnyPage } from './pages/404';
import { App } from './App';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" />} />
        <Route path="tabs">
          <Route path=":tabId?" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<AnyPage />} />
      </Route>
    </Routes>
  </Router>
);
