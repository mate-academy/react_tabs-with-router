import {
  HashRouter, Route, Routes, Navigate,
} from 'react-router-dom';
import { App } from './App';
import { Home } from './Components/Home';
import { TabsPage } from './Pages/TabsPage';
import { NotFound } from './Components/NotFound';

export const Root = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Navigate to="/" />} />
          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId?" element={<TabsPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
