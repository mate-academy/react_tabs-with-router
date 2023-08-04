import { Routes, Route, Navigate } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';
import { Navigation } from './components/Navigation';
import { ErrorPage } from './pages/ErrorPage';

export const App = () => (
  <>
    <Navigation />

    <div className="section">
      <div className="container">

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="tabs">
            <Route path=":tabId?" element={<TabsPage />} />
          </Route>

          <Route path="*" element={<ErrorPage />} />
          <Route path="/home" element={<Navigate to=".." />} />
        </Routes>
      </div>
    </div>
  </>
);
