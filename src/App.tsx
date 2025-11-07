import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { TabsPage } from './components/TabsPage';
import { HomePage } from './components/HomePage';
import { NotFoundPage } from './components/NotFoundPage';

export const App: React.FC = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<Navigate to={'/'} replace />} />
      <Route path="/tabs">
        <Route index element={<TabsPage />} />
        <Route path=":tabId" element={<TabsPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </>
);
