import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { App } from './App';
import { NotFoundPage } from './components/NotFoundPage';
import { Tabs } from './components/Tabs';

export const Root = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="tabs">
            <Route index element={<Tabs />} />
            <Route path=":tabId" element={<Tabs />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
