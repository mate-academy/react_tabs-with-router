import {
  Navigate, Route, HashRouter as Router, Routes,
} from 'react-router-dom';
import { App } from './App';
import { HomePage } from './pages/HomePage';
import { ErrorPage } from './pages/ErrorPage';
import { TabsList } from './components/TabsList';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="tabs">
          <Route index element={<TabsList />} />
          <Route path=":tabId" element={<TabsList />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
        <Route path="home" element={<Navigate to=".." />} />
      </Route>
    </Routes>
  </Router>
);
