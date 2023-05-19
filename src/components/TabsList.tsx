import React from 'react';
import { TabLink } from './TabLink';
import { tabs } from '../api';

export const TabsList: React.FC = () => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map((tab) => (
          <TabLink key={tab.id} tab={tab} />
        ))}
      </ul>
    </div>
  );
};
