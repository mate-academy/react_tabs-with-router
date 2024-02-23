import React from 'react';
import cn from 'classnames';
import { Tab } from '../../types/Tab';
import { TabsProps } from '../../types/TabsProps';

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const isValidTabId = tabs.some(tab => tab.id === selectedTabId);
  const activeTabId = isValidTabId ? selectedTabId : tabs[0].id;

  const handleTabClick = (item: Tab) => {
    if (item.id !== selectedTabId) {
      onTabSelected(item);
    }
  };

  const showTabContent = tabs.find(tab => tab.id === selectedTabId)?.content;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(item => {
            const { id, title } = item;

            return (
              <li
                className={cn({ 'is-active': activeTabId === id })}
                data-cy="Tab"
                key={id}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    handleTabClick(item);
                  }}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {showTabContent}
      </div>
    </div>
  );
};
