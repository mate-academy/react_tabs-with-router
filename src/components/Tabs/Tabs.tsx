import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../../types/Tab.js';

type Props = {
  tabs: Tab[];
  selectedTabId: string | undefined;
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId }) => {
  const activeTab = tabs.find(tab => (
    selectedTabId ? tab.id === selectedTabId : tabs[0]
  ));

  const existInTabs = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={classNames({
                'is-active': tab.id === selectedTabId,
              })}
            >
              <Link
                to={`/tabs/${tab.id}`}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {!existInTabs ? 'Please select a tab' : activeTab?.content}
      </div>
    </div>
  );
};
