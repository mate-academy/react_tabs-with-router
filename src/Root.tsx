import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from 'react-router-dom';
import { App } from './App';
import { HomePage } from './Pages/HomePages';
import { TabsPages } from './Pages/TabsPages';
import { TabsProvider } from './Store/TabsContext';

export const Root = () => (
  <Router>
    <TabsProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />

          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="tabs">
            <Route index element={<TabsPages />} />
            <Route path=":tabId" element={<TabsPages />} />
          </Route>

          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Route>
      </Routes>
    </TabsProvider>
  </Router>
);
