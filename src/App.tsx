import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { Routes, Route, Navigate } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';
import { NotFoundPage } from './pages/NotFoundPage';

const App = () => (
  <>
    <Navbar />

    <Routes>
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="/" element={<HomePage />} />
      <Route path="tabs">
        <Route index element={<TabsPage />} />
        <Route path=":tabId" element={<TabsPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </>
);

export default App;
export { App };
