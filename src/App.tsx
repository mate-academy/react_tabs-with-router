import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage/HomePage';
import { TabsPage } from './pages/TabsPage/TabsPage';
import { PageNotFound } from './pages/PageNotFound/PageNotFound';
import './App.scss';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

export const App: React.FC = () => (
  <>
    <Navbar />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="tabs">
        <Route index element={<TabsPage />} />
        <Route path=":personSlug" element={<TabsPage />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
      <Route path="home" element={<Navigate to="/" replace />} />
    </Routes>
  </>
);
