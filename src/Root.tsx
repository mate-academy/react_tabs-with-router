import { HashRouter, Navigate } from 'react-router-dom';
import { App } from './App';
import { Route, Routes } from 'react-router-dom';
import { Tabs } from './pages/Tabs';
import { Home } from './pages/Home';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Navigate to="/" />} />

        <Route path="tabs">
          <Route index element={<Tabs />} />
          <Route path=":tabId?" element={<Tabs />} />
        </Route>

        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </HashRouter>
);
