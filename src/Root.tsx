import {
  HashRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Home } from './components/Home';
import { PageNotFound } from './components/PageNotFound';
import { Tabs } from './components/Tabs';
import { App } from './App';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Navigate to="/" />} />
        <Route path="tabs">
          <Route path=":tabId?" element={<Tabs />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </HashRouter>
);
