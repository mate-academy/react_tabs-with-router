import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from './Components/Layout';
import { Home } from './Pages/Home';
import { Tabs } from './Pages/Tabs';
import { NotFound } from './Pages/NotFound';

export const App = () => (

  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Navigate to="/" replace />} />
      <Route path="tabs" element={<Tabs />}>
        <Route path=":tabId" element={<Tabs />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);
