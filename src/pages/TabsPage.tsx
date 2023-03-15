import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { TabContent } from '../components/TabContent';
import { TabsList } from '../components/TabsList';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[],
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const [tabContent, setTabContent] = useState('Please select a tab');

  const { id = '' } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <TabsList
        tabsList={tabs}
        activeId={id}
        changeContent={setTabContent}
      />

      <TabContent content={tabContent} />
    </>
  );
};
