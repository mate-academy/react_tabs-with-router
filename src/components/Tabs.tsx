import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Tab } from '../interfaces/TabInterface';

interface Props {
  tabs: Tab[];
  tabId: string;
}

export const Tabs: FC<Props> = ({ tabs, tabId }) => {
  const currentTab = tabs.find(tab => tab.id === tabId);

  return (
    <div>
      <ul className="tabs">
        {tabs.map(tab => (
          <li className="tab col s3" key={tab.id}>
            <NavLink to={`/tabs/${tab.id}`} activeClassName="active">{tab.title}</NavLink>
          </li>
        ))}
      </ul>
      <h2>
        {currentTab && currentTab.content}
      </h2>
    </div>
  );
};
