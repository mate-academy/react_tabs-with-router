import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { Navigate, Route, Routes } from 'react-router-dom';
import { NavMenu } from './NavMenu';
import { HomePage } from './pages/Home';
import { Tabs } from './pages/Tabs';
import { ErrorPage } from './pages/ErrorPage';

export const App = () => {
  return (
    <>
      <NavMenu />
      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/home" element={<Navigate to="/" />} />

        <Route path="tabs">
          <Route path=":tabId?" element={<Tabs />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />

      </Routes>
    </>
  );
};
