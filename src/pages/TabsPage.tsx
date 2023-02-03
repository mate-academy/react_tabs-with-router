import React from 'react';
import { Tabs } from '../components/Tabs';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  return (
    <>
      <h1 className="title">Tabs page</h1>
      <Tabs
        tabs={tabs}
      />
    </>
  );
};
