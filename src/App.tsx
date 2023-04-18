import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/NavBar';
import { HomePage } from './components/pages/HomePage';
import { TabsPage } from './components/pages/TabsPage';
import { PageNotFound } from './components/pages/PageNotFound';

export const App = () => (
  <>

    <Navbar />

    <div className="section">
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/home"
            element={<Navigate to="/" replace />}
          />
          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  </>
);
