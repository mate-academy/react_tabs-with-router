import {
  HashRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { HomePage } from './HomePage';
import { TabsPage } from './TabsPage';
import { App } from './App';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route
          path="*"
          element={
            <h1 className="title">Page not found</h1>
          }
        />
      </Route>
    </Routes>
  </HashRouter>
);
