import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './Components/HomePage';
import { TabsPage } from './Components/TabsPage';
import { Nav } from './Components/Nav';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tabs" element={<TabsPage />} />
        <Route path="/tabs/:tabId" element={<TabsPage />} />
        <Route path="*" element={<h1>Error 404: page not found</h1>} />
      </Routes>
    </div>
  );
};
