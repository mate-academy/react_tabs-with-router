import { HashRouter, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { App } from './App';

import { TabsPage } from './pages/TabsPage';
import { HomePage } from './pages/HomePage';

export const Root = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" />} />

          <Route path="/tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>

          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
