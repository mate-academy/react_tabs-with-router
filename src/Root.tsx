import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { App } from './App';
import { HomePage } from './Components/HomePage';
import { TabsPage } from './Components/TabsPage';
import { PageNotFound } from './Components/PageNotFound';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
        <Route path="home" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  </Router>
);
