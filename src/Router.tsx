import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';
import { App } from './App';
import { PageNotFound } from './components/PageNotFound';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<Navigate to={'/'} />} />

        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path={`:tabId?`} element={<TabsPage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};
