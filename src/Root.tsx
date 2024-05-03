import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { HomePage } from './pages/homePage';
import { NotFoundPage } from './pages/notFoundPage';
import { TabsPage } from './pages/tabsPage';
import { App } from './App';

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="home" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Router>
  );
};
