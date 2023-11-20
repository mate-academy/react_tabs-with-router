import {
  HashRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { App } from './App';

import { Tabs } from './components/TabsPage';
import { Tab } from './components/TabPage';

createRoot(
  document.getElementById('root') as HTMLElement,
).render(
  <HashRouter>
    <Routes>
      <Route path="/:path?" element={<App />}>
        <Route index element={<h1 className="title">Home page</h1>} />
        <Route path="tabs" element={<Tabs />}>
          <Route path=":tabId" element={<Tab />} />
        </Route>
        <Route
          path="*"
          element={<h1 className="title">Page not found</h1>}
        />
      </Route>
    </Routes>
  </HashRouter>,
);
