import { createRoot } from 'react-dom/client';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { App, tabs } from './App';
import { Home } from './pages/Home';
import { Tabs } from './pages/Tabs';
import { NotFound } from './pages/NotFound';

createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <Routes>
      <Route element={<App />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Navigate to={'/'} />} />
        <Route path="/tabs/:tabId?" element={<Tabs tabs={tabs} />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </HashRouter>,
);
