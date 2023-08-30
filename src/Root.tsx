import {
  HashRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { App } from './App';
import { ErrorPage } from './components/ErrorPage';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="tabs">
          <Route path=":tabId?" element={<TabsPage />} />
        </Route>

        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </HashRouter>
);
