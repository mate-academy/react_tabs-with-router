import { HashRouter, Navigate } from 'react-router-dom';
import { App } from '../App';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../components/Home';
import { TabsPage } from '../components/TabsPage';

export const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />}></Route>
          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>

          <Route
            path="*"
            element={<h1 className="title">Page not found</h1>}
          ></Route>
          <Route path="home" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
