import React from 'react';
import { TabsList } from '../components/TabsList';

export const TabsPage: React.FC = () => {
  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <TabsList />
    </div>
  );
};
