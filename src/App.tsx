import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { Tabs } from './components/Tabs';

export const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/tabs/*"
            element={<Tabs />}
          />
          <Route
            path="/tabs/:tabId/*"
            element={<Tabs />}
          />
          <Route
            path="/home"
            element={<Navigate to="/" replace />}
          />
          <Route
            path="*"
            element={<h1 className="title">Page not found</h1>}
          />
        </Routes>
      </div>
      {/* <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/tabs/*"
          element={<Tabs />}
        />
        <Route
          path="/tabs/:tabId/*"
          element={<Tabs />}
        />
        <Route
          path="/home"
          element={<Navigate to="/" replace />}
        />
        <Route
          path="*"
          element={<h1 className="title">Page not found</h1>}
        />
      </Routes> */}
    </>
  );
};
