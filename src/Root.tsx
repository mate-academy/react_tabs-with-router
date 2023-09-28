import {
  BrowserRouter as Router, Routes, Route, Navigate,
}
  from 'react-router-dom';
import { TabsPage } from './pages/TabsPage';
import { HomePage } from './pages/HomePage';
import { App } from './App';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/home" element={<Navigate to="/" />} />
      <Route path="/" element={<App />}>

        <Route index path="/" element={<HomePage />} />

        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId?" element={<TabsPage />} />
        </Route>

        <Route path="*" element={<p>Not found</p>} />
      </Route>
    </Routes>
  </Router>
);
