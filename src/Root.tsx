import {
  HashRouter, Route, Routes, Navigate,
} from 'react-router-dom';
import { App } from './App';
import { Tabs } from './components/Tabs/Tabs';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route
          index
          element={<h1 className="title">Home page</h1>}
        />
        <Route path="tabs">
          <Route index element={<Tabs />} />
          <Route path=":tabId?" element={<Tabs />} />
        </Route>

        <Route path="home" element={<Navigate to=".." />} />
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </HashRouter>
);
