import 'bulma/css/bulma.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { TabPage } from './pages/TabsPage';

export const App = () => (
  <>
    <Navigation />
    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="tabs">
            <Route index element={<TabPage />} />
            <Route path=":tabId" element={<TabPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  </>
);
