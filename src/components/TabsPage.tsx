import React from 'react';
import { useParams } from 'react-router-dom';

import { Tab } from '../types/Tab';
import { Tabs } from './Tabs';

type Props = {
  tabs: Tab[];
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  return (
    <Tabs
      tabs={tabs}
      selectedTabId={tabId}
    />
  );
};
