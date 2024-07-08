import React from 'react';
import { tabs } from '../../App';
import { Tab } from '../Tab';
import { TabsList } from './TabsList';

interface TabsPageProps {
  tabs: Tab[];
}

export const TabsPage: React.FC<TabsPageProps> = () => {
  return (
    <>
      <h1 className="title">Tabs page</h1>

      <TabsList tabs={tabs} />
    </>
  );
};
