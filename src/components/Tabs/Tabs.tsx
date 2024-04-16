import cn from 'classnames';
import { Link, useParams } from 'react-router-dom';

import React, { useContext } from 'react';
import { TabsContext } from '../../TabsContext';
import { Tab } from '../../types/Tab';

export const Tabs: React.FC = () => {
  const { tabs } = useContext(TabsContext);
  const { tabId } = useParams();

  const selectedTabId = tabId ? tabId : 0;
  const selectedTab = tabs.filter((tab: Tab) => tab.id === selectedTabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => {
              const isSelected = selectedTabId === tab.id;

              return (
                <li
                  key={tab.id}
                  className={cn({ 'is-active': isSelected })}
                  data-cy="Tab"
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
          {selectedTab[0] ? selectedTab[0].content : 'Please select a tab'}
        </div>
      </div>
    </>
  );
};
