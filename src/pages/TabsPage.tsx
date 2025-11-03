import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import cn from 'classnames';
import type { Tab as TabType } from '../types/Tab';

const tabs: TabType[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { tabId } = useParams<{ tabId?: string }>();
  const navigate = useNavigate();
  const activeTab = tabs.find(t => t.id === tabId);

  const handleSelect = (index: number) => {
    navigate(`/tabs/${tabs[index].id}`);
  };

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs
        selectedIndex={tabId ? tabs.findIndex(t => t.id === tabId) : -1}
        onSelect={handleSelect}
      >
        <TabList className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <Tab
                as="li"
                key={tab.id}
                data-cy="Tab"
                className={cn({ 'is-active': tab.id === tabId })}
              >
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </Tab>
            ))}
          </ul>
        </TabList>

        {tabs.map(tab => (
          <TabPanel key={tab.id} />
        ))}
      </Tabs>

      <div className="block" data-cy="TabContent">
        {activeTab ? activeTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
