import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Tabs } from '../Tabs/Tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsList: React.FC = () => {
  const [selectedTabContent, setSelectedTabContent] = useState('');
  const { tabId = '' } = useParams();

  const targetTab = tabs.find(tab => tab.id === tabId);

  useEffect(() => {
    if (targetTab) {
      setSelectedTabContent(targetTab.content);
    }
  }, [tabId]);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <Tabs
              tab={tab}
              selectedTab={tabId}
              key={tab.id}
            />
          ))}
        </ul>
      </div>

      {selectedTabContent ? (
        <div className="block" data-cy="TabContent">
          {selectedTabContent}
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
