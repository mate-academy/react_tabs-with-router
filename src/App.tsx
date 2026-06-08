import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { TabsPage } from './pages/TabsPage';
import { Navigate, Route, Routes } from 'react-router-dom';

// const tabs = [
//   { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
//   { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
//   { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
// ];

export const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="home" element={<Navigate to="/" replace />} />

      <Route index element={<HomePage />} />

      <Route path="tabs">
        <Route index element={<TabsPage />} />
        <Route path=":tabId" element={<TabsPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
);
