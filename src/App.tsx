import { Route, Navigate, Routes } from 'react-router-dom';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navbar } from './component/Navbar';
import { HomePage } from './component/HomePage';
import { PageNotFound } from './component/PageNotFound';
import { Tabs } from './component/Tab';

export const App = () => {
  return (
    <>
      <Navbar />
      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/tabs/">
              <Route index element={<Tabs />} />
              <Route path=":tabId" element={<Tabs />} />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
};
