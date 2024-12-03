import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './pages/Tabs';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { NavBar } from './pages/NavBar';
import { PageNotFound } from './pages/PageNotFound';
// const tabs = [
//   { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
//   { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
//   { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
// ];

export const App = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Navigate to="/" />} />
      <Route path="/tabs" element={<Tabs />} />
      <Route path="/tabs/:tabId" element={<Tabs />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </>
);
