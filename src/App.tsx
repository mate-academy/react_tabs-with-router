import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Header } from './components/Header';
import { TabsPage } from './pages/TabsPage';
import { NotFound } from './pages/NotFound';

export const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="tabs"
        element={<TabsPage />}
      >
        <Route path=":tabId" element={<TabsPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route path="home" element={<Navigate to="/" replace />} />
    </Routes>
  </>
);
