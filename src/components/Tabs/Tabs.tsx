import React from 'react';
import { Outlet } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import { TabItem } from '../Tab/TabItem';

interface Props {
  tabs: Tab[],
}

export const Tabs: React.FC<Props> = ({
  tabs,
}) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <TabItem
            tab={tab}
            key={tab.id}
          />
        ))}
      </ul>

      <Outlet />
    </div>
  );
};
