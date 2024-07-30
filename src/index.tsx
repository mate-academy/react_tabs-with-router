import { createRoot } from 'react-dom/client';
import { Navigate, HashRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { App } from './App';
import { Homepage } from './HomePage';
import { TabsPage } from './TabsPage';

createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Homepage />} />
        <Route path="/tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="home" element={<Navigate to="/" />} />
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </Router>,
);
