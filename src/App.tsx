import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { TabContent } from './components/Tabcontent';
import { SelectTab } from './components/SelectTab';
import { TabsPage } from './pages/TabsPage';

export const App = () => (
  <Routes>
    <Route path="/" element={<NavBar />}>
      <Route index element={<HomePage />} />
      <Route path="home" element={<Navigate to=".." />} />
      <Route path="tabs" element={<TabsPage />}>
        <Route index element={<SelectTab />} />
        <Route path=":tabId" element={<TabContent />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
);
