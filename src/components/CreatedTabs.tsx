import classNames from 'classnames';
import { Tab as TabInterface } from '../types/TabInterface';
import { useNavigate, Link } from 'react-router-dom';
import React from 'react';
import { Tab, TabList, Tabs, TabPanel } from 'react-tabs';

interface TabsProps {
  tabsArr: TabInterface[];
  activeTabId: string | undefined;
}

export const CreatedTabs: React.FC<TabsProps> = ({ tabsArr, activeTabId }) => {
  const navigate = useNavigate();
  const selectedTab = tabsArr.findIndex(tab => tab.id === activeTabId);

  return (
    <Tabs
      onSelect={newIndex => {
        navigate(`/tabs/${tabsArr[newIndex].id}`);
      }}
      selectedIndex={selectedTab}
    >
      <TabList>
        {tabsArr.map(tab => (
          <Tab
            key={tab.id}
            data-cy="Tab"
            className={classNames({
              'is-active': tab.id === activeTabId,
            })}
          >
            <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
          </Tab>
        ))}
      </TabList>
      {tabsArr.map(tab => (
        <TabPanel key={tab.id}>{tab.content}</TabPanel>
      ))}
    </Tabs>
  );
};
