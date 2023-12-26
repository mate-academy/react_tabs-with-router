import { createRoot } from 'react-dom/client';
import {
  HashRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import { App } from './App';
import { HomePage } from './components/HomePage';
import { Tabs } from './components/Tabs/Tabs';
import { ErrorPage } from './components/ErrorPage';

createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" />} />

          <Route path="tabs" element={<Tabs />}>
            <Route index path=":tabsId" />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </HashRouter>,
  );
