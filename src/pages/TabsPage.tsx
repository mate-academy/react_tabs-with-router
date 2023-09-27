import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';
import { TabsList } from '../components/TabsList';

type Props = {
  tabs: Tab[]
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <TabsList tabs={tabs} />
      {tabs.map(tab => tab.id).includes(tabId || '') ? (
        <Outlet />
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
