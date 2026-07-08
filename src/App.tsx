import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './components/pages/HomePage';
import { TabsPage } from './components/pages/TabsPage';
import { PageNotFound } from './components/pages/PageNotFound';
import { Navbar } from './components/Navbar';

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <Navbar />

    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/home" element={<Navigate to="/" replace />} />

      <Route path="tabs">
        <Route index element={<TabsPage />} />
        <Route path=":tabId" element={<TabsPage />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </>
);
