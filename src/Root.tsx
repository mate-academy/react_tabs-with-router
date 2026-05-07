import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { App } from './App';
import { Tabs } from './components/Tabs';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Navigate to=".." replace />} />

        <Route path="tabs">
          <Route path=":tabId?" element={<Tabs />} />
        </Route>

        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </HashRouter>
);
