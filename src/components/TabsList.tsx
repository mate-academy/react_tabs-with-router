import React, { useContext } from 'react';
import { TabsContext } from '../store/TabsContext';
import { Link, useParams } from 'react-router-dom';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

type Props = {
  activeTabIndex: number | undefined;
};

export const TabsList: React.FC<Props> = ({ activeTabIndex }) => {
  const { tabs } = useContext(TabsContext);
  const { tabId } = useParams();

  return (
    <Tabs defaultIndex={activeTabIndex === -1 ? 0 : activeTabIndex}>
      <TabList className="tabs is-boxed">
        {tabs.map(tab => (
          <Tab
            className={tab.id === tabId ? 'is-active' : ''}
            data-cy="Tab"
            key={tab.id}
          >
            <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
              {tab.title}
            </Link>
          </Tab>
        ))}
      </TabList>

      {tabs.map(tab => (
        <TabPanel key={tab.id} data-cy="TabContent">
          {tabId === tab.id ? tab.content : 'Please select a tab'}
        </TabPanel>
      ))}
    </Tabs>
  );
};
