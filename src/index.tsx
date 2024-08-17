import { createRoot } from 'react-dom/client';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { Home } from './pages/Home';
import { Tabs } from './pages/Tabs';

createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/home" element={<Navigate to="/" />} />
        <Route index element={<Home />} />
        <Route path="/tabs">
          <Route path=":tabId?" element={<Tabs />} />
        </Route>
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </HashRouter>,
);
