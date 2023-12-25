import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import './App.scss';

import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage/TabsPage';
import { PageNotFound } from './components/PageNotFound';

const navList = [
  {
    href: '/',
    title: 'Home',
  },
  {
    href: '/tabs',
    title: 'Tabs',
  },
];

export const App = () => (
  <div className="App">
    <Header navList={navList} />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<Navigate to="/" />} />
      <Route path="tabs">
        <Route index element={<TabsPage />} />
        <Route path=":tabsId" element={<TabsPage />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </div>
);
