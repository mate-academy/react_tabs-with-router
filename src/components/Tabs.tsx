import React from 'react';
import { Tab } from './Tab';
import { TabItem } from './TabItem';

interface Props {
  tabs: Tab[];
  id: string;
}

export const Tabs: React.FC<Props> = ({ tabs, id }) => {
  const selectedTab = tabs.find(tab => tab.id === id);

  return (
    <>
      <ul className="tabs-list">
        {
          tabs.map((tab: Tab) => (
            <li key={tab.id}>
              <TabItem tab={tab} selected={selectedTab} />
            </li>
          ))
        }
      </ul>
      {
        selectedTab
          ? (
            <p>
              {selectedTab.content}
            </p>
          )
          : (
            <span />
          )
      }

    </>
  );
};
