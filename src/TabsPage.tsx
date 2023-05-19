import React from 'react';
import { useParams } from 'react-router-dom';
import { TabType } from './types/TabInterface';
import { Tab } from './Tab';

type Props = {
  tabs: TabType[]
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const selectedTabContent = tabs.find((tab) => tab.id === tabId)?.content;

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <div className="tabs is-boxed">
          <ul>
            {tabs.map((tab) => (
              <Tab
                key={tab.id}
                tab={tab}
                selectedTabId={tabId}
              />
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {tabId ? selectedTabContent : 'Please select a tab'}
        </div>
      </div>
    </div>
  );
};
