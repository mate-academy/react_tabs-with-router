import { Routes, Route, HashRouter, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Tabs } from './pages/Tabs';
import { Error } from './pages/Error';
import { App } from './App';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />

        <Route path="tabs">
          <Route index element={<Tabs />} />
          <Route path=":tabId" element={<Tabs />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  </HashRouter>
);
