import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { Tabs } from './components/Tabs';
import { HomePage } from './components/HomePage';
import { InvalidPage } from './components/InvalidPage';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="tabs/:tabId" element={<Tabs />} />
        <Route path="*" element={<InvalidPage />} />
      </Route>
    </Routes>
  </Router>
);
