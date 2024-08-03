import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { TabPages } from './components/TabPages';
import { App } from './App';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} >
        <Route index element={<h1 className="title">Home page</h1>} />
        <Route path="tabs/:tabsId?" element={<TabPages />} />
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
      <Route path="/home" element={<Navigate to="/" replace />} />
    </Routes>
  </Router>
);
