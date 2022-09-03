import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { HomePage } from './components/HomePage';
import { NotFoundPage } from './components/PageNotFound';
import { TabsPage } from './components/TabsPage';

export const App = () => (
  <>
    <NavBar />

    <div className="section">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="home" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  </>
);
