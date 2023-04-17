import { Navigate, Route, Routes } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navbar } from './components/NavBar';
import { NotFound } from './components/NotFound';
import { Home } from './components/Home';
import { Tabs } from './components/Tabs';

export const App = () => (
  <>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Navigate to="/" replace />} />
      <Route path="/tabs">
        <Route index element={<Tabs />} />
        <Route path=":tabId" element={<Tabs />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>

  </>
);
