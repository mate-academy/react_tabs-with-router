import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { TabsPage } from './components/TabsPage';
import { HomePage } from './components/HomePage';
import { ErrorPage } from './components/ErrorPage';

export const App = () => (
  <>
    <Navigation />

    <div className="section">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  </>
);
