import React from 'react';

type TabItem = {
  id: string;
  title: React.ReactNode;
};

type Props = {
  tabs: TabItem[];
  activeTabId: string;
};

export const Tabs: React.FC<Props> = ({ tabs, activeTabId }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            data-cy="Tab"
            className={tab.id === activeTabId ? 'is-active' : ''}
          >
            {tab.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
