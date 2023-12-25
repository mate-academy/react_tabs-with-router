import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/home';
import { TabsPage } from '../pages/tabs';
import { NotFoundPage } from '../pages/not-found';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<Navigate to="/" />} />

      <Route path="/tabs">
        <Route path=":tabId?" element={<TabsPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
