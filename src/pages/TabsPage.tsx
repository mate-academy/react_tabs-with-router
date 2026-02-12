import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import classNames from 'classnames';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();

  const selectedIndex = tabs.findIndex(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs
        selectedIndex={selectedIndex}
        onSelect={() => {}}
        selectedTabClassName="is-active"
      >
        <div className="tabs is-boxed">
          <TabList>
            {tabs.map(tab => (
              <Tab
                key={tab.id}
                data-cy="Tab"
                className={classNames('navbar-item', {
                  'is-active': tabId === tab.id,
                })}
              >
                <Link
                  to={`/tabs/${tab.id}`}
                  style={{ display: 'block', width: '100%', height: '100%' }}
                >
                  {tab.title}
                </Link>
              </Tab>
            ))}
          </TabList>
        </div>

        <div className="block" data-cy="TabContent">
          {selectedIndex === -1 && 'Please select a tab'}

          {tabs.map(tab => (
            <TabPanel key={tab.id}>{tab.content}</TabPanel>
          ))}
        </div>
      </Tabs>
    </>
  );
};
