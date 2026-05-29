import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { Tab as TabType } from '../types/Tab';

const tabs: TabType[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { tabId } = useParams<{ tabId: string }>();
  const navigate = useNavigate();

  const currentIdx = tabs.findIndex(tab => tab.id === tabId);
  const selectedIndex = currentIdx >= 0 ? currentIdx : -1;

  const handleSelect = (index: number) => {
    const targetTab = tabs[index];

    navigate(`/tabs/${targetTab.id}`);
  };

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs
        selectedIndex={selectedIndex}
        onSelect={handleSelect}
        selectedTabClassName="is-active"
      >
        <div className="tabs is-boxed">
          <TabList className="">
            {tabs.map(tab => (
              <Tab key={tab.id} data-cy="Tab" className="">
                <Link to={`/tabs/${tab.id}`} onClick={e => e.preventDefault()}>
                  {tab.title}
                </Link>
              </Tab>
            ))}
          </TabList>
        </div>

        {selectedIndex === -1 ? (
          <div className="block" data-cy="TabContent">
            Please select a tab
          </div>
        ) : (
          tabs.map(tab => {
            const isCurrent = tab.id === tabId;

            return (
              <TabPanel key={tab.id}>
                <div className="block" data-cy="TabContent">
                  {isCurrent ? tab.content : 'Please select a tab'}
                </div>
              </TabPanel>
            );
          })
        )}
      </Tabs>
    </>
  );
};
