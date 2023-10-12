import {
  HashRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';
import { TabsPage } from './pages/TabsPage';
import { App } from './App';
import { HomePage } from './pages/HomePage';
import { TabsProvider } from './store/TabsContext';
import { TabContent } from './pages/TabContent';
import { ErrorPage } from './pages/ErrorPage';

export const Root = () => (
  <Router>
    <TabsProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="tabs" element={<TabsPage />}>
            <Route path=":tabId" element={<TabContent />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </TabsProvider>
  </Router>
);
