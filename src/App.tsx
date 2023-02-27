import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { TabsPage } from './components/Tabs/TabsPage';
import { Navbar } from './components/NavBar';
import { PageNotFound } from './components/PageNotFound';
import { HomePage } from './components/HomePage';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const App: FC = () => {
  return (
    <>
      <Navbar />

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="/tabs">
              <Route index element={<TabsPage />} />
              <Route path=":tabId" element={<TabsPage />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
            <Route />
          </Routes>
        </div>
      </div>
    </>
  );
};
