import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { Tab as TabItem } from '../types/Tab';

interface Props {
  tabs: TabItem[];
}

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();

  const selectedIndex = tabs.findIndex(tab => tab.id === tabId);
  const safeIndex = selectedIndex === -1 ? undefined : selectedIndex;

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs selectedIndex={safeIndex} selectedTabClassName="is-active">
        <div className="tabs is-boxed">
          <TabList>
            {tabs.map(tab => (
              <Tab key={tab.id} data-cy="Tab">
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </Tab>
            ))}
          </TabList>
        </div>

        <div className="block" data-cy="TabContent">
          {safeIndex === undefined ? (
            <span>Please select a tab</span>
          ) : (
            tabs.map(tab => <TabPanel key={tab.id}>{tab.content}</TabPanel>)
          )}
        </div>
      </Tabs>
    </>
  );
};
