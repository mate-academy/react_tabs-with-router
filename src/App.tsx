import { Routes, Route, Navigate } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { NavigationBar } from './components/NavigationBar';
import { Tabs } from './components/Tabs';
import { ErrorPage } from './components/ErrorPage';
import { HomePage } from './components/HomePage';

export const App = () => (
  <>
    <NavigationBar />

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tabs">
            <Route index element={<Tabs />} />
            <Route path=":tabId" element={<Tabs />} />
          </Route>
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  </>
);
