import React from 'react';
import { Tab } from '../types/Tab';
import { Tabs } from './Tabs';
import { useParams } from 'react-router-dom';

type Props = {
  tabs: Tab[];
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId?: string }>();

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <Tabs tabs={tabs} activeTabId={tabId} />
    </>
  );
};
