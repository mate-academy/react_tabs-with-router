import React from 'react';
import { Tab } from '../../types/Tab';
import { TabItem } from '../TabItem';

type Props = {
  tabs: Tab[];
};

export const TabsBody: React.FC<Props> = ({ tabs }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <TabItem tab={tab} />
        ))}
      </ul>
    </div>
  );
};
