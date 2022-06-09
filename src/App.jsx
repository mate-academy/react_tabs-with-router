import './App.scss';
import 'bulma';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage/TabsPage';
import { NotFoundPage } from './components/NotFoundPage';

const App = () => (
  <div className="App">

    <Header />

    <Routes>
      <Route path="" element={<HomePage />} />
      <Route path="tabs" element={<TabsPage />}>
        <Route path=":tabId" />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>

  </div>
);

export default App;
