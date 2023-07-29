import React from 'react';
import { Tabs } from '../Tabs';
import { Tab } from '../../types/Tab';

interface Props {
  tabs: Tab[],
}

export const TabsPage: React.FC<Props> = ({ tabs }) => (
  <>
    <h1 className="title">Tabs page</h1>

    <Tabs
      tabs={tabs}
    />
  </>
);
