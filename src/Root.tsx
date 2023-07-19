import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { ErrorPage } from './components/ErrorPage';
import { TabsPage } from './components/TabsPage';
import { HomePage } from './components/HomePage';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </Router>
);
