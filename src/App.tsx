import './App.scss';
// import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './component/Header';
import { PageNotFound } from './component/PageNotFound';
import { TabsPage } from './component/TabsPage';
import { Home } from './component/Home';

const App:React.FC = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tabs" element={<TabsPage />}>
          <Route path="/tabs:tabId" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
