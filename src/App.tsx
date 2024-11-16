import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './Home';
import { NotFound } from './notFound';
import { TabsPage } from './TabsPage';

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Navigate to={'/'} replace />} />
      <Route path="/tabs">
        <Route index element={<TabsPage />} />
        <Route path=":tabId" element={<TabsPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);
