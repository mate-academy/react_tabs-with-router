import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { TabProvider } from './components/TabContext';
import { TabsPage } from './components/TabsPage';
import { PageNotFount } from './components/PageNotFound';
import { App } from './App';
import { HomePage } from './components/HomePage';

export const Root = () => {
  return (
    <Router>
      <TabProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route index element={<HomePage />} />
            <Route path="tabs/:tabId?" element={<TabsPage />} />
            <Route path="*" element={<PageNotFount />} />
          </Route>
        </Routes>
      </TabProvider>
    </Router>
  );
};
