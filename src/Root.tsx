import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from 'react-router-dom';
import { App } from './App';
import { TabsProvider } from './Context/TabsContext';
import { HomePage } from './pages/HomePages';
import { TabsPage } from './pages/TabsPage';

export const Root = () => {
  return (
    <Router>
      <TabsProvider>
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
              element={<h1 className="title">Page not found</h1>}
            />
          </Route>
        </Routes>
      </TabsProvider>
    </Router>
  );
};
