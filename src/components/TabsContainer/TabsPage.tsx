import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import { Tabs } from '../Tabs/Tabs';

interface Props {
  tabs: Tab[],
}

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const selectedTab = useMemo(() => {
    return tabs.find(tab => tab.id === tabId);
  }, [tabId]);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <Tabs tabs={tabs} />

        <div className="block" data-cy="TabContent">
          {selectedTab ? selectedTab?.content : 'Please select a tab'}
        </div>
      </div>
    </div>
  );
};
