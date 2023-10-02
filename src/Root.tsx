import {
  HashRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { App } from './App';
import { HomePage } from './Components/HomePage';
import { TabsPage } from './Components/TabsPage';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/home" element={<Navigate to="/" />} />

      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />

        <Route path="tabs">
          <Route
            index
            element={<TabsPage />}
          />
          <Route
            path=":tabId"
            element={<TabsPage />}
          />
        </Route>

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
