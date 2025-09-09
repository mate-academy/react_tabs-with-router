import { Navigate, Route, Routes } from 'react-router-dom';
import { Tab } from '../types/Tab';
import { TabsPage } from './TabsPage';
import React from 'react';

interface Props {
  tabs: Tab[];
}

export const TabsRoutes: React.FC<Props> = ({ tabs }) => {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<h1 className="title">Home page</h1>} />
      <Route path="/home" element={<Navigate to="/" replace />} />

      {/* Tabs */}
      <Route path="/tabs">
        {/* Fallback: sem tabId → TabsPage mostra "Please select a tab" */}
        <Route index element={<TabsPage tabs={tabs} />} />
        <Route path=":tabId" element={<TabsPage tabs={tabs} />} />
      </Route>

      {/* Not found */}
      <Route path="*" element={<h1 className="title">Page not found</h1>} />
    </Routes>
  );
};
