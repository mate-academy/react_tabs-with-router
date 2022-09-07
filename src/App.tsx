import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { Navigate, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { HomePage } from './components/HomePage';
import { Tabs } from './components/Tabs';
import { PageNotFound } from './components/PageNotFound';

export const App = () => (
  <>
    <NavBar />

    <div className="section">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/tabs">
          <Route index element={<Tabs />} />
          <Route path=":tabId" element={<Tabs />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  </>
);
