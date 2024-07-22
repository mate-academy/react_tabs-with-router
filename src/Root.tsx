import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { Homepage } from './pages/Homepage';
import { Tabspage } from './pages/Tabspage';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Homepage />} />
        <Route path="tabs">
          <Route index element={<Tabspage />} />
          <Route path=":tabId" element={<Tabspage />} />
        </Route>
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route
          path="*"
          element={<h1 className="title">Page not found</h1>}
        ></Route>
      </Route>
    </Routes>
  </HashRouter>
);
