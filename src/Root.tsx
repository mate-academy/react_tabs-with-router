import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import { App } from './App';
import { Home } from './components/Home';
import { Tabs } from './components/Tabs';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Navigate to="/" />} />
        <Route path="tabs">
          <Route index element={<Tabs />} />
          <Route path=":tabsId" element={<Tabs />} />
        </Route>
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </Router>
);
