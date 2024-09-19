import { createRoot } from 'react-dom/client';
import { HashRouter, Navigate } from 'react-router-dom';
import { App } from './App';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './HomePage';
import { TabsPage } from './TabsPage';

createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" />} />
        <Route path="tabs/">
          <Route index element={<TabsPage />} />
          <Route path=":tabId?" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>

      <Route
        path="*"
        element={<h1 className="title">Page not found</h1>}
      ></Route>
    </Routes>
  </HashRouter>,
);
