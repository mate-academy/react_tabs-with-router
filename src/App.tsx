import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

import './App.scss';

import { Route, Routes, Navigate } from 'react-router-dom';

import { Layout } from './components/Layout';

import { Home, Tabs, NotFoundPage } from './pages';

export const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Navigate to="/" />} />

        <Route path="tabs">
          <Route path=":tabsID?" element={<Tabs />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </>
);
