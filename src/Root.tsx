import { HashRouter } from 'react-router-dom';
import { App } from './App';
import { Route, Routes, Navigate } from 'react-router-dom';
import { TabsPage } from './components/TabsPage';
import { HomePage } from './components/HomePage';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/home" element={<Navigate to="/" />} />
        <Route index element={<HomePage />} />

        <Route path="tabs">
          <Route path=":tabId?" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </HashRouter>
);
