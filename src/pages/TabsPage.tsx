import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { tabs } from '../data/tabs';

export const TabsPage: React.FC = () => {
  const { tabId } = useParams<{ tabId: string }>();
  const navigate = useNavigate();
  const selectedIndex = tabId ? tabs.findIndex(tab => tab.id === tabId) : -1;
  const handleTabSelect = (index: number) => {
    navigate(`/tabs/${tabs[index].id}`);
  };

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <Tabs
          selectedIndex={selectedIndex >= 0 ? selectedIndex : undefined}
          onSelect={handleTabSelect}
          selectedTabClassName="is-active"
        >
          <TabList>
            {tabs.map((tab, index) => (
              <Tab key={tab.id} data-cy="Tab">
                <a
                  href={`#/tabs/${tab.id}`}
                  onClick={e => {
                    e.preventDefault();
                    handleTabSelect(index);
                  }}
                >
                  {tab.title}
                </a>
              </Tab>
            ))}
          </TabList>

          {tabs.map(tab => (
            <TabPanel key={tab.id} data-cy="TabContent">
              {selectedIndex >= 0 && tab.id === tabId ? tab.content : null}
            </TabPanel>
          ))}
        </Tabs>

        {selectedIndex === -1 && (
          <div className="block" data-cy="TabContent">
            Please select a tab
          </div>
        )}
      </div>
    </div>
  );
};
