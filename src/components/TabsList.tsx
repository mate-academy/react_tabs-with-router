import React from 'react';

import { useParams } from 'react-router-dom';
import { TabInfo } from './TabInfo';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsList: React.FC = () => {
  const { tabId } = useParams();
  const tabContent = tabs.find(tab => tab.id === tabId)?.content
  || 'Please select a tab';

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabInfo tab={tab} key={tab.id} />
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {tabContent}
      </div>
    </div>
  );
};
