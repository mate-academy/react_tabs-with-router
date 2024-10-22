import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';
import { App } from './App';
import { NotFoundPage } from './pages/NotFoundPage';

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="*" element={<NotFoundPage />} />

          <Route index element={<HomePage />} />
          <Route path="tabs">
            <Route path=":tabId?" element={<TabsPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};
