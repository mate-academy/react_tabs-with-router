import React from 'react';
import { TabLink } from '../TabLink';
import { tabs } from '../../api/tabs';

export const TabsList: React.FC = () => (
  <>
    <div className="tabs is-boxed">
      <ul>
        {tabs.map((tab) => (
          <TabLink key={tab.id} tab={tab} />
        ))}
      </ul>
    </div>
  </>
);
