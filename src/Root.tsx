import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { App } from './App';
import { Home } from './pages/Home';
import { Tabs } from './pages/Tabs';
import { ErrorPage } from './pages/Error';

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Navigate to="/" />} />
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="tabs">
            <Route index element={<Tabs />} />
            <Route path=":tabId" element={<Tabs />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
