import {
  Routes, Route, HashRouter, Navigate,
} from 'react-router-dom';
import { App } from './App';
import { HomePage } from './Pages/HomePage/HomePage';
import { TabsPage } from './Pages/TabsPage/TabsPage';
import { NotFoundPage } from './Pages/NotFoundePage/NotFoundPage';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/home" element={<Navigate to="/" />} />
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="tabs">
          <Route path=":tabId?" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>

    </Routes>
  </HashRouter>
);
