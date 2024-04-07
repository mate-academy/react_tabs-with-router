import { createRoot } from 'react-dom/client';
import { App } from './App';
import { TabsPage } from './Components/TabsPage';
import { HomePage } from './Components/HomePage';
import {
  Routes,
  Route,
  HashRouter as Router,
  Navigate,
} from 'react-router-dom';

createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" />} />{' '}
        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </Router>,
);
