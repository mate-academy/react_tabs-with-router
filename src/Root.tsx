import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />

        {/* Редірект з /home на / */}
        <Route path="home" element={<Navigate to="/" replace />} />

        {/* Динамічний маршрут вкладок */}
        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>

        {/* 404 сторінка */}
        <Route path="*" element={<h1>Page not found</h1>} />
      </Route>
    </Routes>
  </HashRouter>
);

