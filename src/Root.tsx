import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { HomePage, PageNotFound, TabsPage } from './pages';

const Root: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default Root;
