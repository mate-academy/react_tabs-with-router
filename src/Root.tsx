import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './components/HomePage';
import { Tabs } from './components/Tabs';
import { NotFound } from './components/NotFoundPage';

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
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
