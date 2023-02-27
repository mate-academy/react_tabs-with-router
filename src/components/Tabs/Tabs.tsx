import React from 'react';
import classNames from 'classnames';
import { TabLink } from '../TabLink';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type Props = {
  selectedTabId: string;
};

export const Tabs: React.FC<Props> = ({ selectedTabId }) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || null;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id } = tab;

            return (
              <li
                key={id}
                data-cy="Tab"
                className={classNames(
                  { 'is-active': id === selectedTabId },
                )}
              >
                <TabLink tab={tab} />
              </li>
            );
          })}
        </ul>
      </div>

      {!selectedTab
        ? (
          <div className="block" data-cy="TabContent">
            Please select a tab
          </div>
        )
        : (
          <div className="block" data-cy="TabContent">
            {selectedTab.content}
          </div>
        )}
    </div>
  );
};
