import React from 'react';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const handleClickTab = (tab: Tab) => {
    if (tab.id === selectedTabId) {
      return;
    }

    onTabSelected(tab);
  };

  return (
    <div data-cy="TabsComponent">

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isActive = selectedTab.id === tab.id;

            return (
              <li
                className={classNames(
                  { 'is-active': isActive },
                )}
                data-cy="Tab"
                key={tab.id}
                onClick={() => handleClickTab(tab)}
                aria-hidden="true"
              >
                <a href={`#${tab.id}`} data-cy="TabLink">
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
