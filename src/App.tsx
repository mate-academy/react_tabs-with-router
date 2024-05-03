import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import NavBar from './pages/NavBar';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Tabs from './pages/Tabs';
import Page404 from './pages/404';

export const App = () => (
  <>
    <div className="section">
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<Navigate to={'/'} replace />} />

          <Route path="/tabs" element={<Tabs />}>
            <Route path=":tabId" />
          </Route>
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </div>
    </div>
  </>
);
