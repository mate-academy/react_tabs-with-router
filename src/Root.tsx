import {
  HashRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { HomePage } from './HomePage';
import { TabsPage } from './TabsPage';
import { NotFoundPage } from './NotFoundPage';
import { App } from './App';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate to=".." />} />
        <Route path="tabs">
          <Route path=":tabId?" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </HashRouter>
);
