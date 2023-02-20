import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigation } from './Navigation';
import { Tabs } from './Tabs';

export const App: React.FC = () => {
  return (
    <>
      <Navigation />

      <div className="section">
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <h1 className="title">Home page</h1>
              }
            />
            <Route path="/tabs" element={<Tabs />}>
              <Route path=":tabId" element={<Tabs />} />
            </Route>

            <Route
              path="/home"
              element={<Navigate to="/" />}
            />
            <Route
              path="*"
              element={
                <h1 className="title">Page not found</h1>
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
};
