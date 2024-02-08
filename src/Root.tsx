import {
  HashRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Home } from './pages/Home';
import { Tabs } from './pages/Tabs';
import { NotFoundPage } from './pages/NotFoundRage';
import { App } from './App';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Navigate to=".." />} />
        <Route path="tabs">
          <Route path=":tabId?" element={<Tabs />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </HashRouter>
);
