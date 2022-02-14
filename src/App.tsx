import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { NotFoundPage } from './components/NotFoundPage';
import { TabsPage } from './components/TabsPage';
import { TabsDetails } from './components/TabsDetails';

import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/tabs" element={<TabsPage />}>
            <Route path=":tabId" element={<TabsDetails />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
