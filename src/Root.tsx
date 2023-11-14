import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { App } from './App';
import HomePage from './pages/HomePage';
import TabsPage from './pages/TabsPage';
import ErrorPage from './pages/ErrorPage';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="*" element={<ErrorPage />} />
        <Route index element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" />} />

        <Route path="tabs">
          <Route path=":tabsId?" element={<TabsPage />} />
        </Route>
      </Route>
    </Routes>
  </Router>
);
