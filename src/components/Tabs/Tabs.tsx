import React from 'react';
import { useParams } from 'react-router-dom';
import { TabLink } from '../TabLink';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs: React.FC = () => {
  const { tabId = '' } = useParams();

  const tabContent = tabs.find(tab => tab.id === tabId)?.content || null;

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isActive = tab.id === tabId;

            return (
              <TabLink
                key={tab.id}
                tab={tab}
                isActive={isActive}
              />
            );
          })}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {tabContent || 'Please select a tab'}
      </div>
    </div>
  );
};
