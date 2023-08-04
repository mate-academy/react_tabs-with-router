import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/pages/HomePage';
import { Tabs } from './components/pages/Tabs';
import { ErrorPage } from './components/pages/ErrorPage';

export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="tabs">
          <Route index element={<Tabs />} />
          <Route path=":tabId" element={<Tabs />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/home" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
