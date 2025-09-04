import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {  Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';
import { ErrorsPage } from './components/ErrorsPage';
import { Navbar } from './components/Navbar';

export const App = () => (
  <>
    <Navbar />

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/tabs" element={<TabsPage />} />
          <Route path="/tabs/:tabId" element={<TabsPage />} />
          <Route path="*" element={<ErrorsPage />} />
        </Routes>
      </div>
    </div>
  </>
);
