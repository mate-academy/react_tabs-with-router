import {
  HashRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { TabsPage } from './pages/TabsPage/TabsPage';
import { App } from './App';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />

        <Route path="home" element={<Navigate to="/" />} />

        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>

        <Route
          path="*"
          element={(
            <div className="container">
              <h1 className="title">Page not found</h1>
            </div>
          )}
        />
      </Route>
    </Routes>
  </HashRouter>
);
