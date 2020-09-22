import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Tab } from './interfaces/TabInterface';

interface Props {
  tabs: Tab[];
  tabId: string;
}

export const TabsPage: FC<Props> = ({ tabs, tabId }) => {
  const currentTab = tabs.find(tab => tab.id === tabId);

  return (
    <div>
      <h2>Tabs page</h2>
      <nav>
        <ul className="list">
          {tabs.map(tab => (
            <li key={tab.id}>
              <NavLink to={`/tabs/${tab.id}`}>
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <p>{currentTab && currentTab.content}</p>
    </div>
  );
};
