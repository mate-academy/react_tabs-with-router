import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Tabs } from './pages/Tabs/Tabs';
import { Home } from './pages/Home/Home';
import { App } from './App';

export const Root: React.FC = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />

        <Route path="tabs">
          <Route index element={<Tabs />} />
          <Route path=":tabId" element={<Tabs />} />
        </Route>

        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </HashRouter>
);
