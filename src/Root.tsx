import {
  HashRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { App } from './App';
import { TabsPage } from './Pages/TabsPage';
import { HomePage } from './Pages/HomePage';

export const Root = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" />} />

          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>

          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
