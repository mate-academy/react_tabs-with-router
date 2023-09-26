import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { NoPage } from './pages/NoPage';
import { Home } from './pages/Home';
import { Tabs } from './pages/Tabs';
import { TabPage } from './pages/TabPage';

// const tabs = [
//   { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
//   { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
//   { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
// ];

export const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="tabs" element={<Tabs />}>
        <Route index element={<Tabs />} />
        <Route path=":tabId" element={<TabPage />} />
      </Route>
      <Route path="*" element={<NoPage />} />
      <Route path="home" element={<Navigate to="/" />} />
    </Route>
  </Routes>
);
