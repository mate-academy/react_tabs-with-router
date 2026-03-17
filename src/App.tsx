import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import NavBar from './components/NavBar';
import { Navigate, Routes, Route } from 'react-router-dom';
import TabsPage from './components/TabsPage';

export const App = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<h1 className="title">Home page</h1>} />
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="/tabs">
        <Route index element={<TabsPage />} />
        <Route path=":tabId" element={<TabsPage />} />
      </Route>
      <Route path="*" element={<h1 className="title">Page not found</h1>} />
    </Routes>
  </>
);
