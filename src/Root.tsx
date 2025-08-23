import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { App } from './App';
import { TabsPage } from './components/TabsPage';
import { HomePage } from './components/HomePage';
import { PageNotFound } from './components/PageNotFound';
import { TabsProvider } from './TabsContext/TabsContext';

export const Root = () => (
  <TabsProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  </TabsProvider>
);
