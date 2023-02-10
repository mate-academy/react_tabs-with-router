import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MainNavigation } from './components/MainNavigation.tsx';
import { TabsPage } from './pages/TabsPage';
import { HomePage } from './pages/HomePage';

export const App = () => (
  <div className="section">
    <MainNavigation />
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />
      <Route
        path="home"
        element={<Navigate to="/" replace />}
      />
      <Route path="/tabs">
        <Route index element={<TabsPage />} />
        <Route path=":tabId" element={<TabsPage />} />
      </Route>
      <Route
        path="*"
        element={<h1 className="title">Page not found</h1>}
      />
    </Routes>
  </div>
);
