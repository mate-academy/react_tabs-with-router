import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { App } from './App';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';
import { UnknownPage } from './components/UnknownPage';

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Navigate to="/" />} />
        <Route element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>
          <Route path="*" element={<UnknownPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
