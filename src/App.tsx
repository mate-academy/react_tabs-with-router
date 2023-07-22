import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Page } from './Page';
import { Home } from './components/home';
import { Tabs } from './components/tabs';
import { ErrorPage } from './components/error';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Page />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Navigate to=".." />} />
        <Route path="tabs">
          <Route index element={<Tabs />} />
          <Route path=":tabId" element={<Tabs />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </Router>
);
