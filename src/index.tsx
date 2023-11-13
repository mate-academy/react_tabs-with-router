import { createRoot } from 'react-dom/client';
import {
  HashRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { App } from './App';
import { Tabs } from './components/Tabs';
import { Tab } from './components/Tab';
import { Home } from './components/Home';

createRoot(
  document.getElementById('root') as HTMLElement,
).render(
  <HashRouter>
    <Routes>
      <Route path="/:path?" element={<App />}>
        <Route index element={<Home />} />
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
