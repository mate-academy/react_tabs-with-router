import React from 'react';
import { useParams } from 'react-router-dom';
import { TabList } from './TabList';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs: React.FC = () => {
  const { tabId } = useParams();

  const selectedTab = tabs.filter(tab => tab.id === tabId)[0];

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabList tab={tab} selectedTab={tabId} key={tab.id} />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? (
          <p>{selectedTab.content}</p>
        ) : (
          <p>Please select a tab</p>
        )}
      </div>
    </>
  );
};
