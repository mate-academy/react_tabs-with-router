import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { TabsPage } from '../pages/TabsPage';
import { PageNotFound } from '../pages/PageNotFound';
import { App } from '../App';

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" />} />
          <Route path="tabs">
            <Route path=":tabId?" element={<TabsPage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
};
