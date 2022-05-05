import React from 'react';

import { Route, Routes } from 'react-router-dom';

import 'bulma';
import './App.scss';

import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';

export const App: React.FC = () => (
  <div className="App">
    <Navigation />

    <div className="section">
      <div className="container">
        <div className="box">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tabs" element={<TabsPage />}>
              <Route path=":tabId" element={<TabsPage />} />
            </Route>
            <Route
              path="*"
              element={(
                <h3
                  className="subtitle has-text-danger-dark"
                >
                  Page not found
                </h3>
              )}
            />
          </Routes>
        </div>
      </div>
    </div>
  </div>
);
