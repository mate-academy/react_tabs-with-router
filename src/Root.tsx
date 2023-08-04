import {
  HashRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import { App } from './App';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { TabsPage } from './pages/TabsPage';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<h1 className="title">Home page</h1>} />
        <Route path="home" element={<Navigate to="/" />} />
        <Route path="/tabs/:tabId?" element={<TabsPage />} />
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </HashRouter>
);
