import { Tabs, TabList, Tab } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { Link, useParams } from 'react-router-dom';
import React from 'react';
import cn from 'classnames';
import { TypeTab } from '../types/Tab';
export const PageTabs: React.FC = () => {
  const tabs = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];

  const { tabId } = useParams();
  const activeTab: TypeTab | null = tabs.find(tab => tab.id === tabId) || null;

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <Tabs className="tabs is-boxed">
        <TabList>
          {tabs.map(tab => (
            <Tab
              key={tab.id}
              data-cy="Tab"
              className={cn({
                'is-active': tab.id === tabId,
              })}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </Tab>
          ))}
        </TabList>
      </Tabs>
      <div className="block" data-cy="TabContent">
        {activeTab === null ? 'Please select a tab' : activeTab.content}
      </div>
    </>
  );
};
