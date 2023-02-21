import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Page } from './types/Pages';
import { Navigation } from './components/Navigation';
import { Tabs } from './pages/TabsPage';
import { Page404 } from './pages/Page404';

export const App: React.FC = () => {
  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <Navigation />
      <Routes>
        <Route
          path={Page.home}
          element={<h1 className="title">Home page</h1>}
        />

        <Route path="/home" element={<Navigate to="/" replace />} />

        <Route path={Page.tabs} element={<Tabs />}>
          <Route index element={<Tabs />} />
          <Route path=":tabId" element={<Tabs />} />
        </Route>

        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};
