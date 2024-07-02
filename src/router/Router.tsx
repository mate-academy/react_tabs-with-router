import { Navigate, Route, Routes } from 'react-router-dom';
import { Tabs } from '../pages/Tabs';
import { Home } from '../pages/Home';
import { NotFoundPage } from '../pages/NotFound';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Navigate to="/" />} />
      <Route path="/tabs" element={<Tabs />}>
        <Route path="/tabs/:tabId" element={<Tabs />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
