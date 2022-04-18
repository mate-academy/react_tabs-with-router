import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MainNavigation } from './components/MainNavigation/MainNavigation';
import { Tabs } from './components/Tabs/Tabs';

export const App = () => (
  <div className="app">
    <MainNavigation />
    <Routes>
      <Route path="/" element={<h2 className="app__title">Home page</h2>} />
      <Route path="/home" element={<Navigate to="/" />} />
      <Route path="/tabs/*" element={<Tabs />} />
      <Route
        path="*"
        element={<h3 className="app__title">Page not found</h3>}
      />
    </Routes>
  </div>
);
