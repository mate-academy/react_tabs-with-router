import React from 'react';
import { useParams } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { tabId } = useParams<{ tabId: string }>();

  return (
    <div className="tabs">
      {tabs.map(tab => (
        <React.Fragment key={tab.id}>
          <button type="button">
            {tab.title}
          </button>
          {tab.id === tabId && <p>{tab.content}</p>}
        </React.Fragment>
      ))}
    </div>
  );
};
