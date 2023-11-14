import {
  Route,
  Routes,
  HashRouter,
  Navigate,
} from 'react-router-dom';
import { App } from './App';
import { Home } from './components/Home';
import { Tabs } from './components/Tabs';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route
          path="*"
          element={<h1 className="title">Page not found</h1>}
        />

        <Route index element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />

        <Route path="tabs">
          <Route index element={<Tabs />} />
          <Route path=":tabId?" element={<Tabs />} />
        </Route>
      </Route>
    </Routes>
  </HashRouter>
);
