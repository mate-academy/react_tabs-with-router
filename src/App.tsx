import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MainNav } from './components/MainNav/MainNav';
import { TabsPage } from './components/TabsPage/TabsPage';
import { HomePage } from './components/HomePage/HomePage';
import { ErrorPage } from './components/ErrorPage/ErrorPage';

export const App = () => (
  <>
    <MainNav />

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>

          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  </>
);
