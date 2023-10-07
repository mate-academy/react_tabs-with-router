import {
  HashRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import { Home } from './components/Home';
import { Tabs } from './components/Tabs';
import { ErrorPage } from './components/ErrorPage';
import { App } from './App';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Navigate to="/" />} />
        <Route path="tabs">
          <Route index element={<Tabs />} />
          <Route path=":tabId" element={<Tabs />} />
        </Route>
        {/* <Route path="tabs/:id?" element={<Tabs />} /> */}
        <Route path="*" element={<ErrorPage />} />
      </Route>

    </Routes>
  </HashRouter>
);
