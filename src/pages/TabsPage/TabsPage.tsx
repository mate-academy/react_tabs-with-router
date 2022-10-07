import React from 'react';
import { TabItem } from '../../components/TabItem.tsx';
import { tabs } from '../../data';

export const TabsPage: React.FC = () => {
  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <TabItem tab={tab} />
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      </div>
    </div>
  );
};
