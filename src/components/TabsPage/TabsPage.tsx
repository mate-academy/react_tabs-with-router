import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TabsContext } from '../../context';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export const TabsPage: React.FC = () => {
  const navigate = useNavigate();
  const { tabId } = useParams<{ tabId: string }>();
  const tabs = useContext(TabsContext) ?? [];

  const selectedIndex = tabs.findIndex(tab => tab.id === tabId);

  const handleSelect = (index: number) => {
    const tab = tabs[index];

    if (tab) {
      navigate(`/tabs/${tab.id}`);
    }
  };

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs
        selectedIndex={selectedIndex === -1 ? 0 : selectedIndex}
        onSelect={handleSelect}
      >
        <TabList>
          {tabs.map(tab => (
            <Tab key={tab.id} data-cy="Tab">
              {tab.title}
            </Tab>
          ))}
        </TabList>

        {tabs.map(tab => (
          <TabPanel key={tab.id} data-cy="TabContent">
            {tab.content}
          </TabPanel>
        ))}
      </Tabs>
    </>
  );
};
