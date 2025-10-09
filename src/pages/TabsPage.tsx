/* eslint-disable import/no-extraneous-dependencies */
import { useParams, Link } from 'react-router-dom';
import { Tab as TabType } from '../types/Tab';
import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const tabs: TabType[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams<{ tabId?: string }>();
  const activeIndex = tabs.findIndex(tab => tab.id === tabId);

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <Tabs selectedIndex={activeIndex >= 0 ? activeIndex : undefined}>
        <TabList>
          {tabs.map(tab => (
            <Tab key={tab.id} selectedClassName="is-active">
              <Link to={`/tabs/${tab.id}`} data-cy="Tab">
                {tab.title}
              </Link>
            </Tab>
          ))}
        </TabList>

        {tabs.map(tab => (
          <TabPanel key={tab.id} data-cy="TabContent">
            {tab.id === tabId ? tab.content : null}
          </TabPanel>
        ))}
      </Tabs>

      {activeIndex === -1 && (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </div>
  );
};
