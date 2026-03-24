import { createRoot } from 'react-dom/client';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { App } from './App';
import { Homepage } from './components/Home';
import { Tabspage } from './components/Tabs';

createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Homepage />} />

        <Route path="tabs">
          <Route index element={<Tabspage />} />
          <Route path=":tabId" element={<Tabspage />} />
        </Route>

        <Route path="home" element={<Navigate to="/" replace />} />

        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </Router>,
);
