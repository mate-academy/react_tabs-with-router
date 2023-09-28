import React from 'react';
import { tabs } from '../api/tabs';
import { TabItem } from './TabItem';

export const TabsList: React.FC = () => (
  <div className="tabs is-boxed">
    <ul>
      {tabs.map((tab) => (
        <TabItem tab={tab} key={tab.id} />
      ))}
    </ul>
  </div>
);
