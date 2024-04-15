import { BrowserRouter as Router, Navigate } from 'react-router-dom';
import { App } from './App';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './components/pages/HomePage';
import { TabsPage } from './components/pages/TabsPage';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" replace={true} />} />
        <Route path="tabs" element={<TabsPage />}>
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </Router>
);
