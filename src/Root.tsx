import { Route, Routes, Navigate, HashRouter } from 'react-router-dom';
import { TabsPage } from './page/TabsPage';
import { App } from './App';
import { Home } from './page/HomePage';
import { NotFoundPage } from './page/NotFoundPage';

export const Root = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />

          <Route path="tabs">
            <Route path=":tabId?" element={<TabsPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
