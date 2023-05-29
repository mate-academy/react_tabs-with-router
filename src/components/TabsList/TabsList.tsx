import React from 'react';
import { TabLink } from '../TabLink';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsList: React.FC = () => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map((tab) => (
          <TabLink key={tab.id} tab={tab} />
        ))}
      </ul>
    </div>
  );
};
