import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { App } from '../App';
import { HomePage, NotFoundPage, TabsPage } from '../components';

function Redirection() {
  return <Navigate to="/" replace />;
}

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/home" element={<Redirection />} />
        <Route index element={<HomePage />} />
        <Route path="tabs/:tabId?" element={<TabsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </HashRouter>
);
