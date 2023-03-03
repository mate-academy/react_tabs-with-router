import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './Navigation';
import { HomePage } from './pages/HomePage';
import { WrongUrlPage } from './pages/WrongUrlPage';
import { TabsPage } from './pages/TabsPage';

export const App = () => (

  <>
    <Navigation />

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="*" element={<WrongUrlPage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="/" element={<HomePage />} />

          <Route path="tabs" element={<TabsPage />}>
            <Route path=":tabId" />
            <Route index />
          </Route>

        </Routes>
      </div>
    </div>
  </>

);
