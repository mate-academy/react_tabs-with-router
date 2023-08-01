import React from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import { Tabs } from '../Tabs/Tabs';

interface Props {
  tabs: Tab[],
}

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <Tabs tabs={tabs} />

        {selectedTab ? (
          <div className="block" data-cy="TabContent">
            {selectedTab.content}
          </div>
        ) : (
          <div className="block" data-cy="TabContent">
            Please select a tab
          </div>
        )}
      </div>
    </div>
  );
};
