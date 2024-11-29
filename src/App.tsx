import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainLaout from './MainLaout';
import Home from './pages/Home';
import Tabs from './pages/Tabs';
import PageNotFound from './pages/PageNotFound';

export const App = () => (
  <Routes>
    <Route path="/" element={<MainLaout />}>
      <Route index element={<Home />} />
      <Route path="tabs">
        <Route index element={<Tabs />} />
        <Route path=":tabId" element={<Tabs />} />
      </Route>
      <Route path="home" element={<Navigate to="/" replace={true} />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  </Routes>
);
