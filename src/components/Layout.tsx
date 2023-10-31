import { Routes, Route, Navigate } from 'react-router-dom';
import { tabs } from '../api/tabs';
import { HomePage } from '../pages/HomePage';
import { TabsPage } from '../pages/TabsPage';
import { WrongPathPage } from '../pages/WrongPathPage';
import { App } from '../App';

export const Layout: React.FC = () => (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />

      <Route path="/tabs">
        <Route index element={(<TabsPage tabs={tabs} />)} />

        <Route path=":tabId" element={<TabsPage tabs={tabs} />} />
      </Route>

      <Route path="/home" element={<Navigate to="/" replace />} />

      <Route path="*" element={<WrongPathPage />} />
    </Route>

  </Routes>
);
