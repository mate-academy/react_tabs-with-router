import { useEffect, useState } from 'react';
import cn from 'classnames';

import { tabs as tabsFromServer } from '../api/tabs';
import { Tab } from '../types/Tab';
import { Link, useParams } from 'react-router-dom';

export const TabsPage = () => {
  const [tabs, setTabs] = useState<Tab[]>([]);

  const loadTabs = () => setTabs(tabsFromServer);

  useEffect(loadTabs, []);

  const { tabId } = useParams();

  const selectedTab = tabId ? tabs.find(tab => tab.id === tabId) : 0;

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;

            return (
              <li
                data-cy="Tab"
                className={cn({ 'is-active': tabId === id })}
                key={id}
              >
                <Link to={`/tabs/${id}`}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {!selectedTab ? 'Please select a tab' : selectedTab.content}
      </div>
    </>
  );
};
