import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();
  const navigate = useNavigate();

  const selectedIndex = tabs.findIndex(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs
        selectedIndex={selectedIndex >= 0 ? selectedIndex : undefined}
        onSelect={index => navigate(`/tabs/${tabs[index].id}`)}
      >
        <TabList>
          {tabs.map(tab => (
            <Tab key={tab.id} data-cy="Tab" selectedClassName="is-active">
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

      {selectedIndex >= 0 ? (
        tabs.map(tab => (
          <TabPanel key={tab.id} data-cy="TabContent">
            {tab.content}
          </TabPanel>
        ))
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
