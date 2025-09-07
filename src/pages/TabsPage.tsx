import * as React from 'react';
import { useParams, Link } from 'react-router-dom';
import { tabs } from '../constants/Tabs';
import { Tabs } from '../components/Tabs';
import { Tab } from '../components/Tab';

export const TabsPage = () => {
  const { tabId } = useParams<{ tabId: string }>();
  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs activeTabId={tabId || ''}>
        {tabs.map(tab => (
          <Tab
            key={tab.id}
            id={tab.id}
            title={<Link to={`/tabs/${tab.id}`}>{tab.title}</Link>}
          >
            {tab.content}
          </Tab>
        ))}
      </Tabs>

      {!activeTab && (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
