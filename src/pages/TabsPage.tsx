import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { tabs } from '../types/Tab';

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();

  const selectedIndex = tabs.findIndex(tab => tab.id === tabId);
  const isSelected = selectedIndex >= 0;

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <Tabs selectedIndex={isSelected ? selectedIndex : -1} onSelect={() => {}}>
        <TabList className="tabs">
          {tabs.map(tab => (
            <Tab key={tab.id} data-cy="Tab" selectedClassName="is-active">
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </Tab>
          ))}
        </TabList>

        {tabs.map(tab => (
          <TabPanel key={tab.id} />
        ))}
      </Tabs>

      <div className="block" data-cy="TabContent">
        {isSelected ? tabs[selectedIndex].content : 'Please select a tab'}
      </div>
    </div>
  );
};
