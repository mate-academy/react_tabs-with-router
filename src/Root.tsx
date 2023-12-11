import { HashRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './Pages/HomePage';
import { TabsPage } from './Pages/TabsPage';
import { NotFoundPage } from './Pages/NotFoundPage';
import { HomeRedirect } from './Pages/HomeRedirect';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<HomeRedirect />} />
        <Route index element={<HomePage />} />
        <Route path="tabs">
          <Route path=":tabId?" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>

    </Routes>
  </HashRouter>
);
