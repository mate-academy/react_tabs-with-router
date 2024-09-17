import {
  HashRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { Tabs } from './components/Tabs';
import { App } from './App';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" />} />
        <Route path="tabs">
          <Route path=":tabId?" element={<Tabs />} />
        </Route>
        <Route path="*" element={<h1 className="title">Page not found</h1>} />

      </Route>
    </Routes>
  </HashRouter>
);
