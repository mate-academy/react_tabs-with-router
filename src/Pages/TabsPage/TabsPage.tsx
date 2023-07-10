import React from 'react';
import { TabsList } from '../../components/TabList/TabsList';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
};

export const TabsPage: React.FC<Props> = ({ tabs }) => (
  <>
    <h1 className="title">Tabs page</h1>
    <TabsList tabs={tabs} />
  </>
);
