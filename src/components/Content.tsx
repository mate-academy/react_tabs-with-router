import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Tab } from '../types/Tab';
import { TabsPage } from './TabsPage';

type Props = {
  tabs: Tab[],
};

export const Content: React.FC<Props> = ({ tabs }) => {
  return (
    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<h1 className="title">Home page</h1>} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="tabs">
            <Route index element={<TabsPage tabs={tabs} />} />
            <Route path="/tabs/:tabId" element={<TabsPage tabs={tabs} />} />
          </Route>
          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Routes>
      </div>
    </div>
  );
};
