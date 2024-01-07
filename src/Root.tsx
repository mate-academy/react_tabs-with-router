import {
  HashRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { App } from './App';
import { TabsPage } from './pages/TabsPage/TabsPage';
import { HomePage } from './pages/HomePage/HomePage';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route
          index
          element={<HomePage />}
        />
        <Route path="tabs">
          <Route path=":tabId?" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
        <Route path="home" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  </HashRouter>
);
