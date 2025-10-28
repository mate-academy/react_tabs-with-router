import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { tabId } = useParams<{ tabId?: string }>();

  const foundTabIndex = tabs.findIndex(tab => tab.id === tabId);
  const selectedIndex = foundTabIndex !== -1 ? foundTabIndex : undefined;

  return (
    <div className="page">
      <h1 className="title">Tabs page</h1>

      <Tabs selectedIndex={selectedIndex}>
        <TabList>
          {tabs.map(tab => (
            <Tab key={tab.id} data-cy="Tab" selectedClassName="is-active">
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </Tab>
          ))}
        </TabList>

        {foundTabIndex === -1 ? (
          <div data-cy="TabContent">Please select a tab</div>
        ) : (
          tabs.map(tab => (
            <TabPanel key={tab.id}>
              <div data-cy="TabContent">{tab.content}</div>
            </TabPanel>
          ))
        )}
      </Tabs>
    </div>
  );
};
