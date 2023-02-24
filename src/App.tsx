import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Route, Routes, Navigate } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar';
import { Tabs } from './components/Tabs';
import { HomePage } from './components/HomePage/HomePage';
import { PageNotFound } from './components/PageNotFound';

export const App = () => (
  <>
    <NavigationBar />

    <div className="section">
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
          <Route index element={<Tabs />} />
          <Route path=":tabId" element={<Tabs />} />
        </Route>
        <Route
          path="*"
          element={<PageNotFound />}
        />
      </Routes>
    </div>
  </>
);
