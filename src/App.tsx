import { Routes, Route, Navigate } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';
import { Navigation } from './components/Navigation';
import { ErrorMessage } from './components/ErrorMesage';

export const App = () => (
  <>
    <Navigation />

    <div className="section">
      <div className="container">

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>

          <Route path="*" element={<ErrorMessage />} />
          <Route path="/home" element={<Navigate to=".." />} />
        </Routes>
      </div>
    </div>
  </>
);
