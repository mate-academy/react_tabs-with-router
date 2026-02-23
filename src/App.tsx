import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Routes, Route } from 'react-router-dom';
import { Navbar } from './page/Navbar';
import { HomePage } from './page/HomePage';
import { TabsPage } from './page/TabsPage';

export const App = () => (
  <div className="has-navbar-fixed-top">
    <Navbar />
    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>
          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Routes>
      </div>
    </div>
  </div>
);
