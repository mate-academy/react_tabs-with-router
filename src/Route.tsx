import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { App } from './App';
import { Home } from './pages/HomePage/Home';
import { TabsPage } from './pages/TabsPage/TabsPage';

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<Navigate to="/" />} />

          <Route index element={<Home />} />
          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>
          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Route>
      </Routes>
    </Router>
  );
};
