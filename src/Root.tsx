import {
  HashRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import { App } from './App';
import { NotFoundPage } from './components/NotFoundPage';
import { HomePage } from './components/HomePage';
import Tabs from './components/Tabs';

const Root = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<Navigate to=".." />} />
          <Route path="tabs" element={<Tabs />}>
            <Route path=":tabId" element={<Tabs />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default Root;
