import React from 'react';
import { Tab } from '../types/Tab';
import { Tabs } from './Tabs';

type Props = {
  tabs: Tab[];
  tabId?: string;
};

export const TabsList: React.FC<Props> = ({ tabs, tabId }) => (
  <div className="tabs is-boxed">
    <ul>
      {tabs.map(tab => (
        <Tabs key={tab.id} tab={tab} isActive={tab.id === tabId} />
      ))}
    </ul>
  </div>
);
