import React from 'react';
import { TabsList } from './TabsList';
import { tabs } from '../api/tabs';

export const TabsPage = () => (
  <div className="container">
    <h1 className="title">Tabs page</h1>

    <TabsList tabs={tabs} />
  </div>
);
