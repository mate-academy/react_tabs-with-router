import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import { Navigation } from './components/Navigation/Navigation';
import { HomePage } from './pages/HomePage';
import { NotFound } from './pages/NotFound';
import { Tabs } from './pages/Tabs';

export const App: FC = () => (
  <div className="App">
    <Navigation />

    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />

      <Route path="/home" element={<Navigate replace to="/" />} />

      <Route path="/tabs/" element={<Tabs />}>
        <Route path=":tabId" element={<Tabs />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
);
