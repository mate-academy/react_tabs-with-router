import { createRoot } from 'react-dom/client';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { TabsPage } from './Components/TabsPage';

const HomePage = () => {
  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Home page</h1>
      </div>
    </div>
  );
};

const NotFoundPage = () => {
  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Page not found</h1>
      </div>
    </div>
  );
};

createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />

        <Route path="home" element={<Navigate to="/" replace />} />

        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </HashRouter>,
);
