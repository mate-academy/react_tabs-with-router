import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';
import { Tabs } from '../components/Tabs';

type Props = {
  tabs: Tab[]
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <Tabs tabs={tabs} />
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
