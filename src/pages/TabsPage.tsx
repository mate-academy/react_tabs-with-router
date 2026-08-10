import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/lib/css/react-tabs.css';
import { tabs as tabsData } from '../api/tabs';

export const TabsPage: React.FC = () => {
  const { tabId } = useParams<{ tabId?: string }>();
  const navigate = useNavigate();

  const getInitialTabIndex = () => {
    if (tabId) {
      const index = tabsData.findIndex(tab => tab.id === tabId);
      return index === -1 ? 0 : index;
    }
    return 0;
  };

  const [selectedIndex, setSelectedIndex] = useState(getInitialTabIndex());

  const tabExistsInUrl = tabId ? tabsData.some(tab => tab.id === tabId) : true;

  useEffect(() => {
    const indexInUrl = tabsData.findIndex(tab => tab.id === tabId);
    if (indexInUrl !== -1 && indexInUrl !== selectedIndex) {
      setSelectedIndex(indexInUrl);
    } else if (!tabId && selectedIndex !== 0) {
      setSelectedIndex(0);
    }
  }, [tabId, selectedIndex]);

  const handleTabSelect = (index: number) => {
    const selectedTab = tabsData[index];
    if (selectedTab) {
      navigate(`/tabs/${selectedTab.id}`);
    }
    setSelectedIndex(index);
  };

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      {tabId && !tabExistsInUrl ? (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      ) : (
        <Tabs selectedIndex={selectedIndex} onSelect={handleTabSelect}>
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
