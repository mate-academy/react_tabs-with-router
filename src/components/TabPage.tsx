import React from 'react';
import { useMatch } from 'react-router-dom';
import { Tab } from '../types/Tab';
import { Tabs } from './Tabs';

type Props = {
  tabs: Tab[],
};

export const TabPage: React.FC<Props> = ({ tabs }) => {
  const match = useMatch('/tabs/:tabId');
  const selectedTabId = match?.params.tabId;

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <Tabs
        tabs={tabs}
        tabId={selectedTabId}
      />
      <div className="block" data-cy="TabContent">
        Please select a tab
      </div>
    </>
  );
};
