import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import React from 'react';
import {
  Navigate, Route, Routes,
} from 'react-router-dom';
import { Header } from './components/Header/Header';
import { TabsPage } from './components/TabsPage/TabsPage';

export const App: React.FC = () => {
  return (
    <>
      <Header />

      <div className="section">
        <Routes>
          <Route
            path="/"
            element={(
              <h1 className="title">Home page</h1>
            )}
          />

          <Route path="/tabs">
            <Route index element={<TabsPage />} />
            <Route path="/tabs/:tabId" element={<TabsPage />} />
          </Route>

          <Route
            path="*"
            element={(
              <h1 className="title">Page not found</h1>
            )}
          />

          <Route
            path="/home"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </div>
    </>
  );
};
