import React from 'react';
import cn from 'classnames';

import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string | undefined;
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId }) => {
  const selectedTab = tabs.find((tab) => selectedTabId === tab.id);

  return (
    <div data-cy="TabsComponent">
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={cn({ 'is-active': tab.id === selectedTabId })}
            >
              <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : <p>Please select a tab</p>}
      </div>
    </div>
  );
};
