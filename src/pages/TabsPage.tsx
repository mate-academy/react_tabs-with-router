import React from 'react';
import { Tab } from '../types/Tab';
import { useParams, useOutletContext } from 'react-router-dom';
import { Tabs } from '../components/Tabs';

type OutletContextType = {
  tabs: Tab[];
};

export const TabsPage: React.FC = () => {
  const { tabs } = useOutletContext<OutletContextType>();
  const { tabId } = useParams();

  return <Tabs tabs={tabs} tabId={tabId} />;
};
