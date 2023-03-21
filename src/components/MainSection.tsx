import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { TabsPage } from '../pages/TabsPage';

export const MainSection: React.FC = () => (
  <div className="section">
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="home" element={<Navigate to="/" />} />
      </Routes>
    </div>
  </div>
);
