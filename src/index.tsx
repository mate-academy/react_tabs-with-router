import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';

createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
        <Route path="/home" element={<Navigate to="/" />} />

        <Route path="tabs" element={<TabsPage />}>
          <Route path=":tabID" element={<TabsPage />} />
        </Route>
      </Route>
    </Routes>
  </HashRouter>,
);
