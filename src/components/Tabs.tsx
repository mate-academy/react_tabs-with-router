import React from 'react';
import { Tab } from '../types/Tab';
import { TabsItem } from './TabsItem';

type Props = {
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <TabsItem
            key={tab.id}
            tab={tab}
          />
        ))}
      </ul>
    </div>
  );
};
