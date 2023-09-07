import {
  HashRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import { App } from './App';
import { Home } from './pages/Home';
import { TabsPage } from './pages/TabsPage';
import { Page404 } from './pages/Page404';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="tabs">
          <Route path=":tabID?" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Route>
      <Route path="/home" element={<Navigate to="/" />} />
    </Routes>
  </HashRouter>
);
