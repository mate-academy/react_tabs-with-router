import React from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import { Tabs } from '../Tabs/Tabs';

type Props = {
  tabs: Tab[];
};

export const TabsPage: React.FC<Props> = ({
  tabs,
}) => {
  const { tabId } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs
        tabs={tabs}
        tabId={tabId}
      />
    </>
  );
};
