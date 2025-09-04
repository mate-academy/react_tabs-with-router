import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/Home';
import { Tabs } from './pages/Tabs';
import { App } from './App';
import TabsItem from './pages/TabsItem';

createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" replace />} />

        <Route path="tabs" element={<Tabs />}>
          <Route index element={<TabsItem />} />
          <Route path=":tabId" element={<TabsItem />} />
        </Route>

        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </HashRouter>,
);
