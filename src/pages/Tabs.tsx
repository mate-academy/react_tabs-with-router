import { Link, useParams } from 'react-router-dom';
import React from 'react';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Tab as TabType } from '../types/Tab';

type Props = {
  tabs: TabType[];
};

export const TabsComponent: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const selectedIndex = tabs.findIndex(tab => tab.id === tabId);

  return (
    <>
      <Tabs
        selectedIndex={selectedIndex}
        onSelect={() => {}}
        selectedTabClassName="is-active"
      >
        <TabList>
          {tabs.map(tab => (
            <Tab key={tab.id} data-cy="Tab">
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </Tab>
          ))}
        </TabList>

        {tabs.map(tab => (
          <TabPanel key={tab.id} data-cy="TabContent">
            {tab.content}
          </TabPanel>
        ))}
      </Tabs>

      {selectedIndex === -1 && (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
