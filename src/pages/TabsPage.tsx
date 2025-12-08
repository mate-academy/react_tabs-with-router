import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { tabs } from '../data/tabs';

export const TabsPage: React.FC = () => {
  const { tabId } = useParams<{ tabId: string }>();
  const navigate = useNavigate();

  // Calculate selected index from URL tabId
  const selectedIndex = tabId ? tabs.findIndex(tab => tab.id === tabId) : -1;

  // Handle tab selection - update URL when user clicks a tab
  const handleTabSelect = (index: number) => {
    navigate(`/tabs/${tabs[index].id}`);
  };

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        {selectedIndex >= 0 ? (
          <Tabs
            selectedIndex={selectedIndex}
            onSelect={handleTabSelect}
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
        ) : (
          <>
            <div className="tabs is-boxed">
              <ul>
                {tabs.map(tab => (
                  <li key={tab.id} data-cy="Tab">
                    <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="block" data-cy="TabContent">
              Please select a tab
            </div>
          </>
        )}
      </div>
    </div>
  );
};
