import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { App } from './App';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';
import { NonExistentPage } from './pages/NonExistentPage';

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />

          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId?" element={<TabsPage />} />
          </Route>

          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="*" element={<NonExistentPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
