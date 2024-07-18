import { createRoot } from 'react-dom/client';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { Home } from './components/Home';
import { Tabs } from './components/Tabs';
import { NotFound } from './components/NotFoud';

createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Navigate to={'/'} />} />
        <Route index element={<Home />} />
        <Route path="tabs">
          <Route index element={<Tabs />} />
          <Route path=":tabId" element={<Tabs />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </HashRouter>,
);
