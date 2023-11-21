import {
  HashRouter as Router, Navigate, Route, Routes,
} from 'react-router-dom';
import { App } from './App';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';
import { ErrorPage } from './pages/ErrorPage';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />

        <Route path="tabs" element={<TabsPage />}>
          <Route path=":tabId?" element={<TabsPage />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </Router>
);
