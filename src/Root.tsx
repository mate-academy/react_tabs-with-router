import {
  HashRouter,
  Routes,
  Route,
  Navigate,
}
  from 'react-router-dom';
import { TabsPage } from './pages/TabsPage';
import { HomePage } from './pages/HomePage';
import { PageNotFound } from './pages/PageNotFound';
import { App } from './App';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/home" element={<Navigate to="/" />} />
      <Route path="/" element={<App />}>

        <Route index path="/" element={<HomePage />} />

        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId?" element={<TabsPage />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </HashRouter>
);
