/* eslint-disable no-console */
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Homepage } from './Homepage';
import { TabsPage } from './TabsPage';
import { PageNotFound } from './PageNotFound';

export const App = () => {
  return (
    <>
      <Navigation />
      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="tabs">
              <Route index element={<TabsPage />} />
              <Route path=":tabId" element={<TabsPage />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/home" element={<Navigate to="/" />} />
          </Routes>

        </div>
      </div>
    </>
  );
};
