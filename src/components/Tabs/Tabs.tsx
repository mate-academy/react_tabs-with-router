import React from 'react';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';

interface TabsProps {
  tabs: Tab[]
  selectedTabId: string
  onTabSelected: (tab: Tab) => void
}

export const Tabs: React.FC<TabsProps> = ({
  tabs, selectedTabId, onTabSelected,
}) => {
  const handleTabClick = (tab: Tab) => {
    if (selectedTabId !== tab.id) {
      onTabSelected(tab);
    }
  };

  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames({
                'is-active': selectedTab === tab,
              })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleTabClick(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {selectedTab
          ? selectedTab.content
          : 'Please select a tab'}
      </div>
    </div>
  );
};
