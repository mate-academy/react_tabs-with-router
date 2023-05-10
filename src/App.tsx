import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Route, Routes, Navigate } from 'react-router-dom';

import { Nav } from './components/Nav';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';

export const App = () => (
  <>
    <Nav />

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<h1 className="title">Page not found</h1>} />

          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>
        </Routes>
      </div>
    </div>
  </>
);
