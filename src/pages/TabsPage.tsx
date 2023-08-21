import React from 'react';
import { useParams } from 'react-router-dom';

import { Tab } from '../types/Tab';
import { TabsTable } from '../componets/TabsTable';

type Props = {
  tabs: Tab[];
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId = '' } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <TabsTable
        tabs={tabs}
        selectedTabId={tabId}
      />
    </>
  );
};
