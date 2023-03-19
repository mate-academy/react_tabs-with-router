import React from 'react';
import { useParams } from 'react-router-dom';

import { TabContent } from '../components/TabContent';
import { TabsList } from '../components/TabsList';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[],
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { id = '' } = useParams();

  const tabContent = tabs.find(tab => tab.id === id)?.content
    || 'Please select a tab';

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <TabsList
        tabsList={tabs}
        activeId={id}
      />

      <TabContent content={tabContent} />
    </>
  );
};
