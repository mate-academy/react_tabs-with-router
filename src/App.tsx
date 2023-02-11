import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';

import { HomePage } from './Pages/HomePage';
import { PageNotFound } from './Pages/PageNotFound';
import { TabsPages } from './Pages/TabsPages';
import { NavBar } from './Components/NavBar';

export const App = () => (
  <>
    <NavBar />

    <div className="section">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="tabs">
          <Route index element={<TabsPages />} />
          <Route path=":tabId" element={<TabsPages />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  </>
);
