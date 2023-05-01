import classNames from 'classnames';
import React from 'react';
import { getTabById } from '../helpers';
import { Tab } from '../types/Tab';

interface Props {
  tabs: Tab[];
  onTabSelected: (
    tab: Tab,
  ) => void;
  selectedTabId: string;
}

export const Tabs: React.FC<Props> = ({
  tabs,
  onTabSelected,
  selectedTabId,
}) => {
  const selectedTab = getTabById(tabs, selectedTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const isActiveTab = selectedTab.id === tab.id;

            return (
              <li
                className={classNames({
                  'is-active': isActiveTab,
                })}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`/${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (!isActiveTab) {
                      onTabSelected(tab);
                    }
                  }}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        className="block"
        data-cy="TabContent"
      >
        {selectedTab.content}
      </div>
    </div>
  );
};
