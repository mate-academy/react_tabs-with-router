import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';
import './App.scss';

export const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="tabs*" element={<TabsPage />} />
    </Route>
  </Routes>
);
