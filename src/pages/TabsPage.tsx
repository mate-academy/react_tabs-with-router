import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/lib/css/react-tabs.css';
import { tabs as tabsData } from '../api/tabs';

export const TabsPage: React.FC = () => {
  const { tabId } = useParams<{ tabId?: string }>();
  const navigate = useNavigate();

  const selectedIndex = tabId
    ? tabsData.findIndex(tab => tab.id === tabId)
    : 0;

  const isInvalidTab = tabId !== undefined && selectedIndex === -1;

  const handleTabSelect = (index: number) => {
    const targetTab = tabsData[index];
    if (targetTab) {
      navigate(`/tabs/${targetTab.id}`);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      {isInvalidTab ? (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      ) : (
        <Tabs
          selectedIndex={selectedIndex < 0 ? 0 : selectedIndex}
          onSelect={handleTabSelect}
        >
          <TabList>
            {tabsData.map(tab => (
              <Tab key={tab.id}>{tab.title}</Tab>
            ))}
          </TabList>

          {tabsData.map(tab => (
            <TabPanel key={tab.id}>
              <div className="block" data-cy="TabContent">
                {tab.content}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      )}
    </div>
  );
};
