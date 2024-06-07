import { Link, useParams } from 'react-router-dom';
import React from 'react';
import classNames from 'classnames';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs: React.FC = () => {
  const { tabId } = useParams();
  const selectedTabId = tabId ? tabId : 0;
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];
  const checkTab = tabs.every(tab => tab.id !== selectedTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                key={tab.id}
                data-cy="Tab"
                className={classNames({
                  'is-active': tab.id === selectedTabId,
                })}
              >
                <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
                  {tab.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {checkTab ? 'Please select a tab' : selectedTab.content}
      </div>
    </div>
  );
};
