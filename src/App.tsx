import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Navigate, Route, Routes,
} from 'react-router-dom';
import { FC } from 'react';
import { PageTabs } from './Components/PageTabs/Tabs';
import { Navbar } from './Components/Navbar/Navbar';

export const App: FC = () => {
  return (
    <>
      <Navbar />
      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<h1 className="title">Home page</h1>} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="tabs" element={<PageTabs />}>
              <Route path=":tabId" element={<PageTabs />} />
            </Route>
            <Route
              path="*"
              element={<h1 className="title">Page not found</h1>}
            />
          </Routes>
        </div>
      </div>
    </>
  );
};
